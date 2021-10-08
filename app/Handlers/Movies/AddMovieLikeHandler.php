<?php

namespace App\Handlers\Movies;

use App\MovieRating;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\AddMovieLikeRequest;
use App\Services\ModelDataExtractors\Movie\MovieRatingsDataExtractor;


Class AddMovieLikeHandler  {

    public function handle(AddMovieLikeRequest $request) : Response{
      $movieRating = MovieRating::firstOrNew(['movie_id' => $request->get('movie_id'),
                                              'user_id'  => \Auth::user()->id]);
      $movieRating->user_assigned_like = true;
      $movieRating->save();
      return response()->json($movieRating->movie->getLikesData(userLikesMovie:true), 200);
    }
    
}