<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Products_Cat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index(){
        $products = Product::with(['products_cat', 'promo']) // Au lieu de 'products_cat_id'
                        ->orderBy('created_at', 'desc') // Au lieu de 'description'
                        ->get();
        $products_cat = Products_Cat::orderBy('name')->get();

        return Inertia::render('Public/Home', compact('products', 'products_cat'));
    }
    public function create()
    {
        $products_cats = Products_Cat::orderBy('name')->get();
        
        return Inertia::render('Admin/Products/Create', [
            'products_cats' => $products_cats,
        ]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'products_cat_id' => 'required|exists:products_cats,id',
            'promo_id' => 'nullable|exists:promo,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string|min:10',
            'stock' => 'required|integer|min:0',
            'pin' => 'boolean',
            'colour' => 'required|regex:/^#[0-9A-Fa-f]{6}$/',
            'price' => 'required|numeric|min:0',
            'img_main' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'img_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'img_3' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'img_4' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $imagePaths = [];
        $imageFields = [ 'img_main', 'img_3', 'img_2', 'img_4'];

        foreach ($imageFields as $field) {
            if ($request->hasFile($field)) {
                $imagePath[$field] = $request->file($field)->store('products', 'public');
            }
        }

        $product = Product::create(array_merge($validatedData, $imagePaths));

        return redirect()->route('public.show', $product->id)
                        ->with('success', 'Produit ajouté avec succès !');
    
    }
    public function show(Product $product)
    {
        $product->load(['products_cat']);
        
        return Inertia::render('Public/Show', [
            'product' => $product,
            // 'canEdit' => $this->canModify($product),
            // 'canDelete' => $this->canModify($product),
        ]);
    }
}
