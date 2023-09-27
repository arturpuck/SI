<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use App\Traits\LinkFactory;
use Illuminate\View\View;

class GetTheMostPopularMoviesHandler
{
    use LinkFactory;

    public function __construct(protected MoviesRepository $moviesRepository)
    {
    }

    public function handle(?int $pageNumber): View  
    {
        $pageNumber ??= 1;
        $movies = $this->moviesRepository->sortByTheMostPopular()
            ->paginate($pageNumber, route('movies.the-most-popular'));
        $links = $this->generateLinks(route('movies.the-most-popular') . '/{}', range(1, $movies->numberOfPages())); //I suck ...

        return view('movies.movies_set_complete')->with([
            'title' => 'the_most_popular_movies',
            'description' => 'the_most_popular_movies',
            'movies' => $movies,
            'links' => $links
        ]);
    }
}
