<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductsCatSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Électronique'],
            ['name' => 'Vêtements'],
            ['name' => 'Maison & Jardin'],
            ['name' => 'Sport & Loisirs'],
            ['name' => 'Livres'],
        ];

        foreach ($categories as $cat) {
            ProductCategory::create($cat);
        }
    }
}