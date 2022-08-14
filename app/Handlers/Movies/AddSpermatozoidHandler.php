<?php

namespace App\Handlers\Movies;

use Carbon\Carbon;
use App\MovieRating;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\AddSpermatozoidRequest;


Class AddSpermatozoidHandler {


    public function handle(AddSpermatozoidRequest $request) : Response{
      $userID = \Auth::user()->id;
      $rating =  MovieRating::firstOrNew(['user_id' => $userID, 
                                         'movie_id' => $request->get('movie_id')]);
      ++$rating->ammount_of_spermatozoids;
      $rating->last_spermatozoid_added_at = Carbon::now();
      $rating->save();

      return response()->json($rating->movie->getSpermatozoids($userID), 200);
    }
    
}