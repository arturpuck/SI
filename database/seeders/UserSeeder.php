<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\User;
use Database\Factories\UserFactory;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
              ->count(10)
              ->create();
    }
}
