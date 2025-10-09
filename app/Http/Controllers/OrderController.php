<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmed;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\UserCart;
use App\Models\UserCartCoupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Créer une commande depuis le panier
     */
    public function store(Request $request)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $userId = Auth::id();
        
        // Récupérer les items du panier
        $cartItems = UserCart::where('user_id', $userId)
            ->with('product.promo')
            ->get();

        if ($cartItems->isEmpty()) {
            return back()->with('error', 'Votre panier est vide');
        }

        // Calculer les totaux
        $cartTotal = 0;
        foreach ($cartItems as $item) {
            $price = $item->product->price;
            if ($item->product->promo) {
                $discount = ($price * $item->product->promo->percent) / 100;
                $price = $price - $discount;
            }
            $cartTotal += $price * $item->quantity;
        }

        // Récupérer le coupon appliqué
        $appliedCoupon = UserCartCoupon::where('user_id', $userId)->first();
        
        $discountAmount = 0;
        if ($appliedCoupon) {
            $discountAmount = $appliedCoupon->discount_amount;
        }
        $finalTotal = $cartTotal - $discountAmount;

        // Créer la commande
        $order = Order::create([
            'user_id' => $userId,
            'total' => $cartTotal,
            'discount_amount' => $discountAmount,
            'final_total' => $finalTotal,
            'status' => 'pending'
        ]);

        // Créer les items de commande
        foreach ($cartItems as $item) {
            $price = $item->product->price;
            if ($item->product->promo) {
                $discount = ($price * $item->product->promo->percent) / 100;
                $price = $price - $discount;
            }

            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item->product_id,
                'quantity' => $item->quantity,
                'unit_price' => $price,
                'total_price' => $price * $item->quantity
            ]);
        }

        // Vider le panier et supprimer le coupon
        UserCart::where('user_id', $userId)->delete();
        UserCartCoupon::where('user_id', $userId)->delete();

        return redirect()->route('user.orders.index')->with('success', 'Commande créée, en attente de confirmation');
    }

    /**
     * Afficher les commandes de l'utilisateur
     */
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())
            ->with('items.product')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Public/User/Orders', [
            'orders' => $orders
        ]);
    }

    public function cancel(Order $order)
    {
        $order->update(['status' => 'cancelled']);
        return back()->with('success', 'Commande annulée');
    }
    public function confirm(Order $order)
    {
        // Vérifier le stock pour chaque item
        foreach ($order->items as $item) {
            if ($item->product->stock < $item->quantity) {
                return back()->with('error', "Stock insuffisant pour {$item->product->name}");
            }
        }

        // Diminuer le stock
        foreach ($order->items as $item) {
            $item->product->update([
                'stock' => $item->product->stock - $item->quantity
            ]);
        }

        // Mettre à jour le statut
        $order->update(['status' => 'confirmed']);

        // Envoyer l'email au client
        Mail::to($order->user->email)->send(new OrderConfirmed($order));

        return back()->with('success', 'Commande confirmée et email envoyé au client');
    }
}