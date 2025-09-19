<?php

namespace Database\Factories;

use App\Models\Products_Cat;
use App\Models\Promo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'products_cat_id' => Products_Cat::factory(), // ✅ Ou utiliser inRandomOrder()->first()?->id
            'promo_id' => rand(0, 1) ? Promo::factory() : null, // ✅ Promo optionnelle
            'name' => fake()->words(2, true), // ✅ Nom de produit plus réaliste
            'description' => fake()->paragraph(3), // ✅ Description plus longue
            'price' => fake()->randomFloat(2, 10, 999), // ✅ Prix avec 2 décimales
            'stock' => fake()->numberBetween(0, 100),
            'pin' => fake()->boolean(20), // ✅ 20% de chance d'être épinglé
            'colour' => fake()->hexColor(), // ✅ Était "couleur" au lieu de "colour"
            'img_main' => 'products/seed/*.png', // ✅ Image par défaut
            'img_3' => 'products/seed/*.png',
            'img_4' => 'products/seed/*.png',
            'img_2' => 'products/seed/*.png',
        ];
    }
}