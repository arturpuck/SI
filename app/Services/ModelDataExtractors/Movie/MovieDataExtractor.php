<?php

namespace App\Services\ModelDataExtractors\Movie;

use App\Movie;
use App\Pornstar;
use App\ModelShards\Movie\MoviesListShard;
use App\ModelShards\Movie\MovieBasicDataShard;
use App\ModelShards\Pornstar\PornstarsListShard;
use App\ModelShards\Pornstar\PornstarBasicDataShard;
use App\Services\ModelDataExtractors\Movie\MovieRatingsDataExtractor;


Class MovieDataExtractor{

    public static function getPornstarsList(Movie $movie) : ?PornstarsListShard {

        if($movie->pornstars?->isNotEmpty()){
           $pornstarsList = [];
           $movie->pornstars->each(function(Pornstar $pornstar) use (&$pornstarsList){
               $pornstarsList[] = new PornstarBasicDataShard($pornstar->nickname, $pornstar->id);
           });
           return new PornstarsListShard(...$pornstarsList);
        }
        return null;
    }

    public static function getBasicData(Movie $movie) : MovieBasicDataShard {
      
      $votes = $movie->votes->all();
      $user = \Auth::user();

      $ratingShard = MovieRatingsDataExtractor::getRating($user,...$votes);
      $spermatozoidsShard = MovieRatingsDataExtractor::getAmmountOfSpermatozoids($user,...$votes);
      $likesShard = MovieRatingsDataExtractor::getAmmountOfLikes($user,...$votes);
      $pornstarsListShard = self::getPornstarsList($movie);
      $movieID = $movie->movie_id ?? $movie->id;
      $movieDetails = new MovieBasicDataShard($movieID,
                                              $movie->duration,
                                              $movie->title,
                                              $movie->views,
                                              $movie->created_at,
                                              $ratingShard,
                                              $likesShard,
                                              $spermatozoidsShard,
                                              $pornstarsListShard);

        return $movieDetails;
    }

    public static function getMoviesBasicData(Movie ...$movies) : MoviesListShard {
        $totalMovies = count($movies);
        $moviesList = [];

        foreach($movies as $movie){
          $moviesList[] = self::getBasicData($movie);
        }

        return new MoviesListShard($totalMovies, ...$moviesList);
    }
}