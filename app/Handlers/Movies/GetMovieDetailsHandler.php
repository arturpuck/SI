<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use App\Services\ModelDataExtractors\Movie\MovieDataExtractor;
use App\Http\Resources\Movie\MovieDetailResource;


Class GetMovieDetailsHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(int $movieID) : MovieDetailResource{
      
      $movie = $this->moviesRepository->filterById($movieID)
                                       ->withBasicPornstarList()
                                       ->with(['votes'])
                                       ->get()
                                       ->first();
      
      //  $movieDetails = MovieDataExtractor::getBasicData($movie);

        return new MovieDetailResource($movie);
    }
    
}