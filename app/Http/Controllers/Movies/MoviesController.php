<?php

namespace App\Http\Controllers\Movies;

use Illuminate\Http\Request;
use App\Repositories\MoviesRepository;
use App\Http\Controllers\Controller;
use App\Pornstar;
use App\Handlers\Movies\ShowAdvancedSearchPanelHandler;

class MoviesController extends Controller
{
    public function getLatestMoviesPage(Request $request, MoviesRepository $moviesRepository){
      
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

    public function getAdvancedSearchPage(){
        
         return view('movies.advanced_search')->with([
            'title' => 'porn_movies_advanced_search',
            'description' => 'advanced_search_description'
         ]);
    }
}
