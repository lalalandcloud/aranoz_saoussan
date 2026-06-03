<?php

namespace Database\Seeders;

use App\Models\BlogCat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogCatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   public function run(): void
    {
        
        $blog_cats = [
            ['name' => 'Destinations Exotiques',
            'img' => 'blogs/categories/a'],
            ['name' => 'Décoration Intérieure',
            'img' => 'blogs/categories/b'],
            ['name' => 'Hôtels & Hébergements',
            'img' => 'blogs/categories/c'],
            ['name' => 'Art de Vivre',
            'img' => 'blogs/categories/d'],
            ['name' => 'Inspirations Déco',
            'img' => 'blogs/categories/e'],
        ];

        foreach ($blog_cats as $blog_cat){
            BlogCat::create($blog_cat);
        }
    }
}