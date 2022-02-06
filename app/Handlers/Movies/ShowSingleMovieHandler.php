<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;


Class ShowSingleMovieHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(string $movieID){

       $id = intval($movieID);

       $movie = $this->moviesRepository->filterById($id)
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