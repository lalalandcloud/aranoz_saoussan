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
            'img' => 'product_cats/a.png'],
            ['name' => 'Vêtements',
            'img' => 'product_cats/b.png'],
            ['name' => 'Maison & Jardin',
            'img' => 'product_cats/c.png'],
            ['name' => 'Sport & Loisirs',
            'img' => 'product_cats/d.png'],
            ['name' => 'Livres',
            'img' => 'product_cats/e.png'],
        ];

        foreach ($categories as $cat) {
            ProductCategory::create($cat);
        }
    }
}