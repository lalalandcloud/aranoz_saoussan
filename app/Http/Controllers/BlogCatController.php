<?php

namespace App\Http\Controllers;

use App\Models\BlogCat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogCatController extends Controller
{

    public function index()
    {
        $categories = BlogCat::all();
        return view('blog_cats.index', compact('categories'));
    }
    public function create()
    {
        return Inertia::render('Admin/Blogs/Category/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'img' => 'required|string|max:500'
        ]);
        
        BlogCat::create($validated);
        return back()->with('success', 'Catégorie créé avec succès !');
    }

}
