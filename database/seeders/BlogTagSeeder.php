<?php

namespace Database\Seeders;

use App\Models\BlogTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blog_tags = [
            ['name' => 'Voyage en Famille', 
            'icon' => '<i class="fa-solid fa-image"></i>'],
            ['name' => 'Aventure', 
            'icon' => '<i class="fa-solid fa-house"></i>'],
            ['name' => 'Détente', 
            'icon' => '<i class="fa-solid fa-cloud"></i>'],
            ['name' => 'Romantique', 
            'icon' => '<i class="fa-solid fa-sun"></i>'],
            ['name' => 'Budget Serré', 
            'icon' => '<i class="fa-solid fa-bell"></i>'],
            ['name' => 'Luxe', 
            'icon' => '<i class="fa-solid fa-camera"></i>'],
            ['name' => 'Nature', 
            'icon' => '<i class="fa-solid fa-moon"></i>'],
            ['name' => 'Culture', 
            'icon' => '<i class="fa-solid fa-bomb"></i>'],
            ['name' => 'Gastronomie', 
            'icon' => '<i class="fa-solid fa-star"></i>'],
            ['name' => 'Solo', 
            'icon' => '<i class="fa-solid fa-poo"></i>'],
        ];
        
        foreach ($blog_tags as $blog_tag){
            BlogTag::create($blog_tag);
        }
    }
}
