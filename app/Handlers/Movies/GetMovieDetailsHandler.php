<?php

namespace App\Handlers\Movies;


use Symfony\Component\HttpFoundation\Response;
use App\Repositories\MoviesRepository;
use App\Services\ModelDataExtractors\MovieDataExtractor;


Class GetMovieDetailsHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(int $movieID) : Response{
      
      $movie = $this->moviesRepository->filterById($movieID)
                                       ->withBasicPornstarList()
                                       ->with(['votes'])
                                       ->get()
                                       ->first();
      $data = [
        'views' => $movie->views,
        'added_at' => $movie->created_at,
        'rating' => MovieDataExtractor::getRating($movie),
        'spermatozoids' => MovieDataExtractor::getAmmountOfSpermatozoids($movie, \Auth::user()),
        'likes' => MovieDataExtractor::getAmmountOfLikes($movie, \Auth::user()),
      ];

      if(\Auth::check()){
          $data['user_rate'] = MovieDataExtractor::getUserRate($movie, \Auth::user());
      }

      if($movie->pornstars->isNotEmpty()){
          $data['pornstars'] = $movie->pornstars->toArray();
      }

        return response()->json($data, 200);
    }
    
}