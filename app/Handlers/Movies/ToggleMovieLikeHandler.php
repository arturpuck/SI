<?php

namespace App\Handlers\Movies;

use App\MovieRating;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\ToggleMovieLikeRequest;

Class ToggleMovieLikeHandler  {

    public function handle(ToggleMovieLikeRequest $request) : Response{
      $userLikesMovie = $request->get('user_likes_movie');
      $movieRating = MovieRating::firstOrNew(['movie_id' => $request->get('movie_id'),
                                              'user_id'  => \Auth::user()->id]);

      $movieRating->user_assigned_like = $userLikesMovie;
      $movieRating->save();
      return response()->json($movieRating->movie->getComplexLikesData(userLikesMovie:$userLikesMovie), 200);
    }
    
}