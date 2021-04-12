<?php

namespace App\Handlers\Movies;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\AddMovieLikeRequest;
use App\MovieRating;


Class AddMovieLikeHandler {

    public function handle(AddMovieLikeRequest $request) : Response{
      $movieRating = MovieRating::firstOrNew(['movie_id' => $request->get('movie_id'),
                                              'user_id'  => \Auth::user()->id]);
      $movieRating->user_assigned_like = true;
      $movieRating->save();
      return response('success',200);
    }
    
}