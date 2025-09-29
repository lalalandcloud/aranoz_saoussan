<?php

namespace App\Http\Controllers;

use App\Models\BlogTag;
use Illuminate\Http\Request;

class BlogTagController extends Controller
{
    public function index()
    {
        $tags = BlogTag::all();
        return view('blog_tags.index', compact('tags'));
    }
}
