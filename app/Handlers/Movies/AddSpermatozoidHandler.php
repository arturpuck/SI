<?php

namespace App\Handlers\Movies;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\AddSpermatozoidRequest;
use App\MovieRating;
use Carbon\Carbon;


Class AddSpermatozoidHandler {


    public function handle(AddSpermatozoidRequest $request) : Response{
      $rating =  MovieRating::firstOrNew(['user_id' => \Auth::user()->id, 
                                         'movie_id' => $request->get('movie_id')]);
      ++$rating->ammount_of_spermatozoids;
      $rating->last_spermatozoid_added_at = Carbon::now();
      $rating->save();
      return response('success',200);
    }
    
}