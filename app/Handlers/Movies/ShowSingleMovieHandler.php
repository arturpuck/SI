<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviesAdvancedSearchValidator;


Class ShowSingleMovieHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(string $slug){

       $movie = $this->moviesRepository->filterBySlug($slug)
                                        ->get()
                                        ->first();
        ++$movie->views;
        $movie->save();

        return view('movies.single_movie')->with([
          'movie' => $movie,
          'title' => $movie->title,
          'description' => $this->getDescription($movie->title)
        ]);
    }

    private function getDescription(string $movieTitle) : string {
        return __('single_movie_description_beginning').$movieTitle;
    }
    

}