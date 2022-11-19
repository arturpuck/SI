<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;

class GetFormOptionsHandler
{
    public function handle() : JsonResponse
    {
        $formOptions = [
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all(),
        ];
        return new JsonResponse($formOptions);
    }

}