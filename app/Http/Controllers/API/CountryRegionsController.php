<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\API\GetCitiesRequest;
use App\Handlers\API\GetCitiesHandler;
use App\Voivodeship;

class CountryRegionsController extends Controller
{
    public function getCities(GetCitiesRequest $getCitiesRequest, GetCitiesHandler $handler) : JsonResponse
    {
        return $handler->handle($getCitiesRequest);
    }

    public function getVoivodeships() : JsonResponse
    {
        return new JsonResponse(Voivodeship::all(), 200);
    }
}
