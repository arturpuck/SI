<?php

namespace App\Handlers\Pornstars;

use App\Http\Requests\Pornstars\GetPornstarRatingRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Traits\Handlers\PornstarRateReader;


class GetPornstarRatingHandler
{
    use PornstarRateReader;

    public function handle(GetPornstarRatingRequest $request): Response
    {
        $ratings = $this->getPornstarRatings($request->get('id'));
        return response()->json($ratings, 200);

    }
}
