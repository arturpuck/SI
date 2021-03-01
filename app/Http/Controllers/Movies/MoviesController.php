<?php

namespace App\Http\Controllers\Movies;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repositories\MoviesRepository;
use App\Http\Controllers\Controller;
use App\Pornstar;
use App\Handlers\Movies\ShowAdvancedSearchPanelHandler;
use App\Handlers\Movies\AdvancedSearchHandler;
use App\Handlers\Movies\GetMoviesByCategoryHandler;

class MoviesController extends Controller
{
    public function getLatestMoviesPage(Request $request, MoviesRepository $moviesRepository, $pageNumber)
    {

        $movies = $moviesRepository
            ->select(['id', 'duration', 'title', 'views', 'is_translated_to_polish'])
            ->with(['pornstars'])
            ->chronological()
            ->paginate(intval($request->pageNumber), route('movies.new'));

        return view('movies.movies_set_complete')->with([
            'title' => 'the_latest_movies',
            'description' => 'the_latest_movies_page_description',
            'movies' => $movies
        ]);
    }

    public function getAdvancedSearchPage()
    {

        return view('movies.advanced_search')->with([
            'title' => 'porn_movies_advanced_search',
            'description' => 'advanced_search_description'
        ]);
    }

    public function advancedSearch(Request $request, AdvancedSearchHandler $handler): Response
    {
        return $handler->handle($request);
    }

    public function getMoviesByCategory(string $categoryName, int $pageNumber = 1, GetMoviesByCategoryHandler $categoriesHandler)
    {
        return $categoriesHandler->handle($categoryName, $pageNumber);
    }
}
