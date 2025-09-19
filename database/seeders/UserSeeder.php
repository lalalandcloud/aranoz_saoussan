<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users =         
        [
            ['first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@example.com',
            'password' => 'password',
            'address' => '123 rue de Rivoli
            75001 Paris
            France',
            'role_id' => Role::where('name', 'admin')->first()->id],

            ['first_name' => 'c_m',
            'last_name' => 'c_m',
            'email' => 'c_m@example.com',
            'password' => 'password',
            'address' => '45 avenue Jean Jaurès
            69007 Lyon
            France',
            'role_id' => Role::where('name', 'c_m')->first()->id],
 
            ['first_name' => 'user',
            'last_name' => 'user',
            'email' => 'user@example.com',
            'password' => 'password',
            'address' => '56 rue Saint-Rome
            31000 Toulouse
            France',
            'role_id' => Role::where('name', 'user')->first()->id
            ],
            ['first_name' => 'agent',
            'last_name' => 'agent',
            'email' => 'agent@example.com',
            'password' => 'password',
            'address' => '12 place du Général de Gaulle
            59000 Lille
            France',
            'role_id' => Role::where('name', 'agent')->first()->id
            ],
            ['first_name' => 'webmaster',
            'last_name' => 'webmaster',
            'email' => 'webmaster@example.com',
            'address' => '78 boulevard de la République
            13002 Marseille
            France',
            'password' => 'password',
            'role_id' => Role::where('name', 'webmaster')->first()->id]
        ];
        foreach ($users as $u) {
            User::create($u);
        };
    }
}