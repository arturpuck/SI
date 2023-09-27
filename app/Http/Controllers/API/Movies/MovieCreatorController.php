<?php

namespace App\Http\Controllers\API\Movies;

use App\Http\Controllers\Controller;
use App\Handlers\API\Movies\MovieCreatorHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MovieCreatorController extends Controller
{
    public function createMovie(Request $request, MovieCreatorHandler $handler) : JsonResponse
    {
         return $handler->handle($request);
    }
}
