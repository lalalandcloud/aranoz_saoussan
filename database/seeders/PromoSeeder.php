<?php

namespace Database\Seeders;

use App\Models\Promo;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{
    public function run(): void
    {
        // Supprimer les promos existantes
        Promo::truncate();
        
        // Promos entre 20% et 40%
        $promos = [
            ['name' => 'Promo Flash', 'percent' => 20],
            ['name' => 'Soldes', 'percent' => 25],
            ['name' => 'Super Promo', 'percent' => 30],
            ['name' => 'Méga Réduction', 'percent' => 35],
            ['name' => 'Liquidation', 'percent' => 40],
        ];

        foreach ($promos as $promo) {
            Promo::create($promo);
        }
        
        echo "5 promos créées (20% à 40%)\n";
    }
}