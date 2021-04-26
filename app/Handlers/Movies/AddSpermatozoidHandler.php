<?php

namespace App\Handlers\Movies;

use Carbon\Carbon;
use App\MovieRating;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\AddSpermatozoidRequest;
use App\Services\ModelDataExtractors\Movie\MovieRatingsDataExtractor;



Class AddSpermatozoidHandler {


    public function handle(AddSpermatozoidRequest $request) : Response{
      $rating =  MovieRating::firstOrNew(['user_id' => \Auth::user()->id, 
                                         'movie_id' => $request->get('movie_id')]);
      ++$rating->ammount_of_spermatozoids;
      $rating->last_spermatozoid_added_at = Carbon::now();
      $rating->save();

      $movieSpermatozoids = MovieRatingsDataExtractor::getAmmountOfSpermatozoids(\Auth::user(), ...$rating->movie->votes);
      return response()->json($movieSpermatozoids, 200);
    }
    
}