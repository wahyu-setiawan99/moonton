<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'moonton.admin@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $admin->assignRole('admin');
    }
}
