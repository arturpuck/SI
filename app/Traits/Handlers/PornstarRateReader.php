<?php

namespace App\Traits\Handlers;

use App\PornstarRate;

trait PornstarRateReader
{
    public function getPornstarRatings(int $pornstarID): array
    {
        $pornstarRatings = PornstarRate::where('pornstar_id', $pornstarID)
            ->get();

        $ammountOfVotes = intval($pornstarRatings?->count());
        $userRatedPornstar = \Auth::check() && ($userRating = intval($pornstarRatings?->where('user_id', \Auth::user()->id)?->first()?->rate));
        $ratings = [
            'overallRating' => $ammountOfVotes > 9 ? round($pornstarRatings->sum('rate') / $ammountOfVotes, 2) : null,
            'userRating' => $userRatedPornstar ? round($userRating, 2) : null,
            'numberOfVotes' => $ammountOfVotes
        ];
        return $ratings;
    }
}
