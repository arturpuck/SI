<?php

namespace App\Http\Controllers\API\Movies;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Movies\RequiredMovieFilesValidationRequest;
use App\Handlers\API\Movies\RequiredMovieFilesVerificationHandler;
use Illuminate\Http\JsonResponse;

class RequiredMovieFilesVerificationController extends Controller
{
    public function verifyRequiredMovieFiles(RequiredMovieFilesValidationRequest $request, RequiredMovieFilesVerificationHandler $handler) : JsonResponse
    {
         return $handler->handle($request);
    }
}
