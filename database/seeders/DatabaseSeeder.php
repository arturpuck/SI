<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\PornstarCommentsSeeder;
use Database\Seeders\MovieRatingSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UserSeeder::class);
         $this->call(PornstarCommentsSeeder::class);
         $this->call(MovieRatingSeeder::class);
    }
}
