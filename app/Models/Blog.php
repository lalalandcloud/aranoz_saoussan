<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'article',
        'blog_tag_id',
        'blog_cat_id',
        'user_id'
    ];

    public function blogTag(){
        return $this->belongsToMany(BlogTag::class);
    }

    public function blogCat(){
        return $this->belongsTo(BlogCat::class);
    }

    public function blogImg(){
        return $this->hasMany(BlogImg::class);
    }
}
