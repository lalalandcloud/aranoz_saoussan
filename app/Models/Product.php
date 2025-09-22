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
}