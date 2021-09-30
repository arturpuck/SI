<?php

namespace App\Handlers\Pornstars;

use App\Http\Requests\Pornstars\RatePornstarRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Traits\Handlers\PornstarRateReader;
use App\PornstarRate;

class RatePornstarHandler
{
    use PornstarRateReader;

    public function handle(RatePornstarRequest $ratePornstarRequest): Response
    {
        $pornstarID = $ratePornstarRequest->get('pornstar_id');
        try{
            PornstarRate::updateOrCreate([
                'user_id' => \Auth::user()->id,
                'pornstar_id' => $pornstarID
            ],
            [
              'rate' => $ratePornstarRequest->get('rate')
            ]);
            $freshRatings = $this->getPornstarRatings($pornstarID);
            return response()->json($freshRatings);
        }
        catch(\Exception $exception){
            return response('the_data_looks_ok_but_an_unexpected_server_error_occured', 500)->header('Content-Type', 'text/plain');
        }
    }
}
