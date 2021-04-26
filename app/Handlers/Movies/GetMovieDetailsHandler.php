<?php

namespace App\Handlers\Movies;

use Symfony\Component\HttpFoundation\Response;
use App\Repositories\MoviesRepository;
use App\Services\ModelDataExtractors\Movie\MovieRatingsDataExtractor;
use App\Services\ModelDataExtractors\Movie\MovieDataExtractor;
use App\ModelShards\Movie\MovieRatingShard;
use App\ModelShards\Movie\MovieBasicDataShard;


Class GetMovieDetailsHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(int $movieID) : Response{
      
      $movie = $this->moviesRepository->filterById($movieID)
                                       ->withBasicPornstarList()
                                       ->with(['votes'])
                                       ->get()
                                       ->first();
      $votes = $movie->votes->all();
      $user = \Auth::user();
      $ratingShard = MovieRatingsDataExtractor::getRating($user,...$votes);
      $spermatozoidsShard = MovieRatingsDataExtractor::getAmmountOfSpermatozoids($user,...$votes);
      $likesShard = MovieRatingsDataExtractor::getAmmountOfLikes($user,...$votes);
      $pornstarsListShard = MovieDataExtractor::getPornstarsList($movie);
      $movieDetails = new MovieBasicDataShard($movie->views,
                                              $movie->created_at,
                                              $ratingShard,
                                              $likesShard,
                                              $spermatozoidsShard,
                                              $pornstarsListShard);

        return response()->json($movieDetails, 200);
    }
    
}