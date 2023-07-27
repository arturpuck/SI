<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;
use App\Voivodeship;
use App\Traits\Prostitution\PhotoTokenGenerator;

class GetFormOptionsHandler
{
    use PhotoTokenGenerator;

    public function handle() : JsonResponse
    {
        $formOptions = [
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all(),
            'voivodeships' => Voivodeship::all()
        ];
        return new JsonResponse($formOptions);
    }

}