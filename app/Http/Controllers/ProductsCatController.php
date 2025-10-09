<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Inertia\Inertia;

class ProductsCatController extends Controller
{
    private $manager;

    public function __construct()
    {
        $this->manager = new ImageManager(new Driver());
    }

    public function index()
    {
        $categories = ProductCategory::withCount('products')->orderBy('name')->get();
        
        return Inertia::render('Admin/ProductCategories/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Products/Categories/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:products_cats,name',
            'img' => 'required|image|mimes:jpeg,png,jpg|max:10240',
        ]);

        if ($request->hasFile('img')) {
            $validatedData['img'] = $this->processAndStoreImage($request->file('img'));
        }

        ProductCategory::create($validatedData);

        return redirect()->route('admin.categories.index')
                        ->with('success', 'Catégorie créée avec succès !');
    }

    public function destroy(ProductCategory $category)
    {
        // Supprimer l'image
        if ($category->img) {
            $imagePath = storage_path('app/public/' . $category->img);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $category->delete();

        return redirect()->route('admin.categories.index')
                        ->with('success', 'Catégorie supprimée avec succès !');
    }

    private function processAndStoreImage($uploadedFile)
    {
        // Créer le dossier product_cats s'il n'existe pas
        $directory = storage_path('app/public/product_cats');
        if (!file_exists($directory)) {
            mkdir($directory, 0755, true);
        }

        $extension = $uploadedFile->getClientOriginalExtension();
        $filename = uniqid() . '.' . $extension;

        // Optimiser l'image (600px de large)
        $image = $this->manager->read($uploadedFile->getRealPath());
        $image->scale(width: 600);
        $image->save($directory . '/' . $filename);

        return 'product_cats/' . $filename;
    }
}