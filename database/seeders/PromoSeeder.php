<?php

namespace Database\Seeders;

use App\Models\Promo;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{
    public function run(): void
    {
        $promos = [
            ['name' => 'Soldes d\'été', 'percent' => 20],
            ['name' => 'Black Friday', 'percent' => 50],
            ['name' => 'Liquidation', 'percent' => 30],
        ];

        foreach ($promos as $promo) {
            Promo::create($promo);
        }
    }
}