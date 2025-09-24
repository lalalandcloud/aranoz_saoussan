<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'description', 
        'price', 
        'stock', 
        'pin', 
        'colour', 
        'products_cat_id', // Ajoutez cette ligne !
        'promo_id',        // Ajoutez cette ligne !
        'img_main', 
        'img_2', 
        'img_3', 
        'img_4',
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'products_cat_id');
    }

    public function promo()
    {
        return $this->belongsTo(Promo::class);
    }
     public function userPins()
    {
        return $this->hasMany(UserPin::class);
    }

    /**
     * Relation many-to-many avec les utilisateurs qui ont épinglé ce produit
     */
    public function pinnedByUsers()
    {
        return $this->belongsToMany(User::class, 'user_pins');
    }

    /**
     * Compter le nombre de fois que ce produit a été épinglé
     */
    public function getPinsCountAttribute()
    {
        return $this->userPins()->count();
    }

    /**
     * Vérifier si le produit est épinglé par l'utilisateur connecté
     */
    public function getIsPinnedByUserAttribute()
    {
        if (!auth()->check()) {
            return false;
        }
        
        return $this->userPins()
                   ->where('user_id', auth()->id())
                   ->exists();
    }

    public function cartItems()
    {
        return $this->hasMany(UserCart::class);
    }

    /**
     * Obtenir les utilisateurs qui ont ce produit dans leur panier
     */
    public function cartUsers()
    {
        return $this->belongsToMany(User::class, 'user_carts')
                    ->withPivot('quantity')
                    ->withTimestamps();
    }

    /**
     * Vérifier si le produit est dans le panier de l'utilisateur connecté
     */
    public function getIsInCartAttribute()
    {
        if (!auth()->check()) {
            return false;
        }
        
        return $this->cartItems()->where('user_id', auth()->id())->exists();
    }

    /**
     * Obtenir la quantité de ce produit dans le panier de l'utilisateur connecté
     */
    public function getCartQuantityAttribute()
    {
        if (!auth()->check()) {
            return 0;
        }
        
        $cartItem = $this->cartItems()->where('user_id', auth()->id())->first();
        return $cartItem ? $cartItem->quantity : 0;
    }
}