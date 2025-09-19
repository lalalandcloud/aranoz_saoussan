<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'user'],
            ['name' => 'admin'],
            ['name' => 'c_m'],
            ['name' => 'agent'],
            ['name' => 'webmaster'],
        ];

        foreach ($roles as $r) {
            Role::create($r);
        }
    }
}
