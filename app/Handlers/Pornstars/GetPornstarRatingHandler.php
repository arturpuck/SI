<?php

namespace App\Handlers\Pornstars;

use App\Http\Requests\Pornstars\GetPornstarRatingRequest;
use Symfony\Component\HttpFoundation\Response;
use App\PornstarRate;


class GetPornstarRatingHandler
{
    public function handle(GetPornstarRatingRequest $request): Response
    {
        $pornstarRatings = PornstarRate::where('pornstar_id', $request->get('id'))
                                        ->get();

        $ammountOfVotes = intval($pornstarRatings?->count());
        $userRatedPornstar = \Auth::check() && ($userRating = intval($pornstarRatings?->where('user_id', \Auth::user()->id)?->first()->rate));
        $ratings = [
            'overallRating' => $ammountOfVotes > 9 ? round($pornstarRatings->sum('rate') / $ammountOfVotes, 2) : null,
            'userRating' => $userRatedPornstar ? round($userRating, 2) : null,
            'numberOfVotes' => $ammountOfVotes
        ];
        return response()->json($ratings, 200);

    }
}
