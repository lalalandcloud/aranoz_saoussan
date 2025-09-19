<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'stock', 'pin', 'colour', 'img_main', 'img_2', 'img_3', 'img_4',
    ];

    public function products_cat(){
        return $this -> belongsTo(Products_Cat::class);
    }

    public function promo(){
        return $this -> belongsTo(Promo::class);
    }
}
