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
        'blog_cat_id',
        'user_id'
    ];

    public function blogTag(){
        return $this->belongsToMany(BlogTag::class);
    }

    public function blogCat(){
        return $this->belongsTo(BlogCat::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function blogImgs(){
        return $this->hasMany(BlogImg::class);
    }

    public function comments()
    {
        return $this->hasMany(BlogUserComment::class)
                    ->with('user')
                    ->orderBy('created_at', 'desc');
    }

    public function hasCommentFromUser($userId)
    {
        return $this->comments()->where('user_id', $userId)->exists();
    }

    public function commentsCount()
    {
        return $this->comments()->count();
    }

}
