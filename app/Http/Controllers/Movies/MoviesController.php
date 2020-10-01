<?php

namespace App\Http\Controllers\Movies;

use Illuminate\Http\Request;
use App\Repositories\MoviesRepository;
use App\Http\Controllers\Controller;

class MoviesController extends Controller
{
    public function getLatestMoviesPage(MoviesRepository $moviesRepository){

        $movies = $moviesRepository
                  ->select(['id', 'duration', 'title', 'views', 'is_translated_to_polish'])
                  ->chronological()
                  ->paginate();

        return view('movies.movies_set_complete')->with([
            'title' => 'the_latest_movies',
            'description' => 'the_latest_movies_page_description',
            'movies' => $movies
        ]);
    }
}
