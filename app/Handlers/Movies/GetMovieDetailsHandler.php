<?php

namespace App\Handlers\Movies;

use Symfony\Component\HttpFoundation\Response;
use App\Repositories\MoviesRepository;
use App\Services\ModelDataExtractors\Movie\MovieDataExtractor;


Class GetMovieDetailsHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(int $movieID) : Response{
      
      $movie = $this->moviesRepository->filterById($movieID)
                                       ->withBasicPornstarList()
                                       ->with(['votes'])
                                       ->get()
                                       ->first();
      
        $movieDetails = MovieDataExtractor::getBasicData($movie);

        return response()->json($movieDetails, 200);
    }
    
}