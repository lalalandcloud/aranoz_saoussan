<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ProductsSeeder extends Seeder
{

    private function getRandomPhoto($path)
        {
            $files = Storage::disk('public')->allFiles($path);
            return count($files) ? $files[array_rand($files)] : 'products/seed/default.png';
        }

    public function run(): void
    {
        $categoryIds = ProductCategory::pluck('id')->toArray();

        for ($i = 0; $i < 25; $i++) {
            Product::factory()->create([
                'products_cat_id' => $categoryIds[array_rand($categoryIds)],
                'img_main' => $this->getRandomPhoto('products/seed'),
            ]);
        }
    }
}