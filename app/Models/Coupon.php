<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'percent'
    ];

    public function calculateDiscount($total)
    {
        return ($total * $this->percent) / 100;
    }

    public function cartApplications()
    {
        return $this->hasMany(UserCartCoupon::class);
    }

    public function getUsageCountAttribute()
    {
        return $this->cartApplications()->count();
    }
}