<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCat extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'img'
    ];

    public function blog(){
        return $this->hasMany(Blog::class);
    }
    
}
