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
            'icon' => '$#ff6b6b'],
            ['name' => 'Aventure', 
            'icon' => '$#4ecdc4'],
            ['name' => 'Détente', 
            'icon' => '$#45b7d1'],
            ['name' => 'Romantique', 
            'icon' => '$#f093fb'],
            ['name' => 'Budget Serré', 
            'icon' => '$#feca57'],
            ['name' => 'Luxe', 
            'icon' => '$#ff9ff3'],
            ['name' => 'Nature', 
            'icon' => '$#00d2d3'],
            ['name' => 'Culture', 
            'icon' => '$#ff7675'],
            ['name' => 'Gastronomie', 
            'icon' => '$#fd79a8'],
            ['name' => 'Solo', 
            'icon' => '$#6c5ce7']
        ];
        
        foreach ($blog_tags as $blog_tag){
            BlogTag::create($blog_tag);
        }
    }
}
