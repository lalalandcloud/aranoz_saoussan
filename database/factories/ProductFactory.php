<?php

namespace Database\Factories;

use App\Models\ProductCategory;
use App\Models\Promo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'products_cat_id' => 1, // Sera écrasé par le seeder
            'promo_id' => null,
            'name' => fake()->words(2, true), 
            'description' => fake()->paragraph(3), 
            'price' => fake()->randomFloat(2, 10, 999), 
            'stock' => fake()->numberBetween(0, 100),
            'pin' => fake()->boolean(20),
            'colour' => fake()->hexColor(),
            'img_main' => 'products/seed/default.png', 
            'img_2' => null,
            'img_3' => null,
            'img_4' => null,
        ];
    }
}