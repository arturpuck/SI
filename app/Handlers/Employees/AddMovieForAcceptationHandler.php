<?php

namespace App\Handlers\Employees;

use Illuminate\Http\JsonResponse;
use App\Helpers\Validators\MoviePropertiesValidator;
use Illuminate\Http\Request;
use App\MovieCandidate;


Class AddMovieForAcceptationHandler
{
    public function handle(Request $request) : JsonResponse
    {
        $validationResult = MoviePropertiesValidator::validate($request);
        if($validationResult === true) {
          $movieCandidate = MovieCandidate::create($request->all());
          return new JsonResponse($movieCandidate);
        } else {
            return $validationResult;
        }
    }

    protected function getValuesForColumnsContainingForeignKeys(Request $request) : array 
    {
      
    }
}