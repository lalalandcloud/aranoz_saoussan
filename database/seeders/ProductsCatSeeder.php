<?php

namespace Database\Seeders;

use App\Models\Products_Cat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsCatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products_cats = [
            ['name' => 'Électronique'],
            ['name' => 'Vêtements'],
            ['name' => 'Maison & Jardin'],
            ['name' => 'Sport & Loisirs'],
            ['name' => 'Livres'],
        ];

        foreach ($products_cats as $cat) {
            Products_Cat::create($cat);
        }
    }
}
