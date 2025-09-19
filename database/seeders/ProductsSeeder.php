<?php

namespace Database\Seeders;

use App\Models\Product;
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
        for ($i = 0; $i < 25; $i++) {
            Product::factory()->create([
                'img_main' => $this->getRandomPhoto('products/seed'),
                ]);
        }   
    }
}
