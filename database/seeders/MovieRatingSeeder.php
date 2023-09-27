<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Movie;
use App\MovieRating;

class MovieRatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];

        foreach(Movie::all() as $movie){
            MovieRating::factory()
                        ->count(rand(10,20))
                        ->create(['movie_id' => $movie->id]);
        }
    }
}
