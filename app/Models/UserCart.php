<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'quantity'
    ];

    /**
     * Relation avec User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relation avec Product
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Calcul du prix total pour cet item (prix * quantité)
     */
    public function getTotalPriceAttribute()
    {
        return $this->product->price * $this->quantity;
    }

    /**
     * Calcul du prix total avec promotion si applicable
     */
    public function getFinalPriceAttribute()
    {
        $price = $this->product->price;
        
        if ($this->product->promo) {
            $discount = ($price * $this->product->promo->percent) / 100;
            $price = $price - $discount;
        }
        
        return $price * $this->quantity;
    }
}