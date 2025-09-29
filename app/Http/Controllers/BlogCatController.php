<?php

namespace App\Http\Controllers;

use App\Models\BlogCat;
use Illuminate\Http\Request;

class BlogCatController extends Controller
{

    public function index()
    {
        $categories = BlogCat::all();
        return view('blog_cats.index', compact('categories'));
    }
}
