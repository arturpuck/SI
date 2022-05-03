<?php

namespace App\Handlers\Movies;

use App\Movie;


Class ShowSingleMovieHandler {

    public function handle(string $movieID){

       $movieID = intval($movieID);

       $movie = Movie::find($movieID);
        ++$movie->views;
        $movie->save();

        return view('movies.single_movie')->with([
          'movie' => $movie,
          'title' => $movie->title,
          'description' => $this->getDescription($movie)
        ]);
    }

    private function getDescription(Movie $movie) : string {
        if($movie->hasDescription()){
            return $movie->getMetaDescriptionTagContent();
        }
        return __('single_movie_description_beginning').$movie->title;
    }
    

}