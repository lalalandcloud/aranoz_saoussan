<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with(['blogTag', 'blogCat', 'blogImgs', 'user'])->get();
        return Inertia::render('Public/Blogs/Index', compact('blogs'));

    }

    public function show($id)
    {
        $blog = Blog::with(['blogTag', 'blogCat', 'blogImgs', 'user'])->findOrFail($id);
        return Inertia::render('Public/Blogs/Show', compact('blog'));
    }
}
