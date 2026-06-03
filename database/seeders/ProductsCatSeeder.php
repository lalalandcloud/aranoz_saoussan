<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductsCatSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Électronique',
            'img' => 'product_cats/a.jpg'],
            ['name' => 'Vêtements',
            'img' => 'product_cats/b.jpg'],
            ['name' => 'Jardin',
            'img' => 'product_cats/c.jpg'],
            ['name' => 'Sport & Loisirs',
            'img' => 'product_cats/d.jpeg'],
            ['name' => 'Livres',
            'img' => 'product_cats/e.jpg'],
        ];

        foreach ($categories as $cat) {
            ProductCategory::create($cat);
        }
    }
}