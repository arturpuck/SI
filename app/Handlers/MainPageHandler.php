<?php

namespace App\Handlers;

use Illuminate\View\View;
use App\Movie;
use App\Traits\LinkFactory;
use Illuminate\Support\Collection;

Class MainPageHandler 
{
    use LinkFactory;


     public function handle() : View
     {

        $latestMovies = $this->getLatestMovies();
        $theMostPopularMovies = $this->getTheMostPopularMovies();
        $totalPages = $this->getNumberOfTotalPages();
        $linksForTheMostPopular = $this->generateLinksByRange(1,$totalPages,'movies.the-most-popular');
        $linksForLatestMovies = $this->generateLinksByRange(1,$totalPages,'movies.new');

        return view('mainpage')->with([
            'theMostPopularMovies' => $theMostPopularMovies,
            'latestMovies' => $latestMovies,
            'linksForTheMostPopular' => $linksForTheMostPopular,
            'linksForLatestMovies' => $linksForLatestMovies
        ]); 
     }

     protected function getNumberOfTotalPages() : int 
     {
        return ceil(Movie::count() /100);
     }

     protected function getLatestMovies() : Collection
     {
         return Movie::query()
         ->withBasicPornstarList()
         ->sortByLastAdded()
         ->take(50)
         ->get();
     }

     protected function getTheMostPopularMovies() : Collection
     {
         return Movie::query()
         ->withBasicPornstarList()
         ->randomizedTheMostPopular()
         ->get()
         ->shuffle();
     }
}