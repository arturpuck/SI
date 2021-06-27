<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\View\View;

class GetTheMostPopularMoviesHandler
{
    public function __construct(protected MoviesRepository $moviesRepository){}

    public function handle(?int $pageNumber) : View 
    {
        $pageNumber ??= 1;
        $movies = $this->moviesRepository->sortByTheMostPopular()
                                   ->paginate($pageNumber, route('movies.the-most-popular'));

        return view('movies.movies_set_complete')->with([
                                    'title' => 'the_most_popular_movies',
                                    'description' => 'the_most_popular_movies',
                                    'movies' => $movies,
                                ]);
    } 
}
