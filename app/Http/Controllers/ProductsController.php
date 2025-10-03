<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\UserPin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ProductsController extends Controller
{

    private $manager;

    public function __construct()
    {
        // Initialiser le manager une seule fois
        $this->manager = new ImageManager(new Driver());
    }
    public function index()
    {
        $products = Product::with(['category', 'promo'])
                        ->orderBy('created_at', 'desc')
                        ->get()
                        ->map(function ($product) {
                            $product->is_pinned_by_user = Auth::check() ? 
                                $product->userPins()->where('user_id', Auth::id())->exists() : false;
                            $product->pins_count = $product->userPins()->count();                            
                            return $product;
                        });
        $categories = ProductCategory::orderBy('name')->get();

        return Inertia::render('Public/Home', compact('products', 'categories'));
    }

    public function create()
    {
        $categories = ProductCategory::orderBy('name')->get(); // Utilisez ProductCategory
        
        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
        ]);
    }

public function store(Request $request)
    {
        $validatedData = $request->validate([
            'products_cat_id' => 'required|exists:products_cats,id',
            'promo_id' => 'nullable|exists:promos,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string|min:10',
            'stock' => 'required|integer|min:0',
            'pin' => 'boolean',
            'colour' => 'required|regex:/^#[0-9A-Fa-f]{6}$/',
            'price' => 'required|numeric|min:0',
            'img_main' => 'required|image|mimes:jpeg,png,jpg|max:10240',
            'img_2' => 'nullable|image|mimes:jpeg,png,jpg|max:10240',
            'img_3' => 'nullable|image|mimes:jpeg,png,jpg|max:10240',
            'img_4' => 'nullable|image|mimes:jpeg,png,jpg|max:10240',
        ]);

        $imagePaths = [];
        $imageFields = ['img_main', 'img_2', 'img_3', 'img_4'];

        foreach ($imageFields as $field) {
            if ($request->hasFile($field)) {
                $imagePaths[$field] = $this->processAndStoreImage(
                    $request->file($field), 
                    $field
                );
            }
        }

        $product = Product::create(array_merge($validatedData, $imagePaths));

        return redirect()->route('public.show', $product->id)
                        ->with('success', 'Produit ajouté avec succès !');
    }

    private function processAndStoreImage($uploadedFile, $field)
    {
        // Créer le dossier s'il n'existe pas
        $directory = storage_path('app/public/products');
        if (!file_exists($directory)) {
            mkdir($directory, 0755, true);
        }

        $extension = $uploadedFile->getClientOriginalExtension();

        // Traitement spécifique pour img_main : 3 versions
        if ($field === 'img_main') {
            // 1. Version grande (1200px max)
            $filenameLarge = 'large_' . uniqid() . '.' . $extension;
            $image = $this->manager->read($uploadedFile->getRealPath());
            $image->scale(width: 1200);
            $image->save($directory . '/' . $filenameLarge);

            // 2. Version moyenne (600px max)
            $filenameMedium = 'medium_' . uniqid() . '.' . $extension;
            $image = $this->manager->read($uploadedFile->getRealPath());
            $image->scale(width: 800);
            $image->save($directory . '/' . $filenameMedium);

            // 3. Version thumbnail (300px max)
            $filenameThumb = 'thumb_' . uniqid() . '.' . $extension;
            $image = $this->manager->read($uploadedFile->getRealPath());
            $image->scale(width: 300);
            $image->save($directory . '/' . $filenameThumb);

            // Retourner le chemin de la version large (principale)
            return 'products/' . $filenameLarge;
        } 
        
        // Pour img_2, img_3, img_4 : conserver taille originale
        else {
            $filename = 'medium_' . uniqid() . '.' . $extension;
            $image = $this->manager->read($uploadedFile->getRealPath());
            $image->scale(width: 800);
            $image->save($directory . '/' . $filename);
            
            return 'products/' . $filename;
        }
    }

    public function show(Product $product)
    {
        $product->load(['category']); // 'category' au lieu de 'products_cat'
        
        $product->is_pinned_by_user = Auth::check() ? 
            $product->userPins()->where('user_id', Auth::id())->exists() : false;
        $product->pins_count = $product->userPins()->count();
        
        return Inertia::render('Public/Show', [
            'product' => $product,
            // 'canEdit' => $this->canModify($product),
            // 'canDelete' => $this->canModify($product),
        ]);
    }
}