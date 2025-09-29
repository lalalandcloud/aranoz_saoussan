<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogImg extends Model
{
    use HasFactory;

    protected $fillable = [
        'img',
        'img2',
        'blog_id',
    ];

    public function blog(){
        return $this->hasOne(Blog::class);
    }
}