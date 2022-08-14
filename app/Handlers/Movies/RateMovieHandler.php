<?php

namespace App\Handlers\Movies;

use App\Http\Requests\Movies\RateMovieRequest;
use App\MovieRating;
use Symfony\Component\HttpFoundation\Response;

class RateMovieHandler
{

    public function handle(RateMovieRequest $request): Response
    {

       $movieRating = MovieRating::updateOrCreate(
            ['user_id' => \Auth::user()->id, 'movie_id' => $request->get('movie_id')],
            ['user_vote' => $request->get('user_vote')]
        );
       
        return response()->json($movieRating->movie->getRatings(\Auth::user()?->id), 200);
    }

}
