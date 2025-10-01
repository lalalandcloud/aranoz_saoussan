<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogUserComment extends Model
{
    use HasFactory;

    protected $table = 'blog_user_comments';

    protected $fillable = [
        'user_id',
        'blog_id',
        'comment'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }
}