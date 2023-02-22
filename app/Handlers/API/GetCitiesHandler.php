<?php

namespace App\Handlers\API;

use App\Http\Requests\API\GetCitiesRequest;
use Illuminate\Http\JsonResponse;
use App\City;

class GetCitiesHandler
{
    public function handle(GetCitiesRequest $getCitiesRequest) : JsonResponse
    {
        $voivodeshipID = $getCitiesRequest->get('voivodeshipID');
        $cities = City::where('voivodeship_id', $voivodeshipID)->get();
        return new JsonResponse($cities, 200);
    }
}