<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use App\Http\Resources\Movie\MovieDetailResource;


Class GetMovieDetailsHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(int $movieID) : MovieDetailResource{
      
      $movie = $this->moviesRepository->filterById($movieID)
                                       ->withBasicPornstarList()
                                       ->with(['votes'])
                                       ->get()
                                       ->first();
      
        return new MovieDetailResource($movie);
    }
    
}