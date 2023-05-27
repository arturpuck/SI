<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;
use App\Voivodeship;
use Illuminate\Support\Facades\Session;
use App\Traits\Prostitution\PhotoTokenGenerator;

class GetFormOptionsHandler
{
    use PhotoTokenGenerator;

    public function handle() : JsonResponse
    {
        if(Session::has('prostitutePhotoVerificationToken')) {
            $prostitutePhotoVerificationToken = Session::get('prostitutePhotoVerificationToken');
        } else {
            $prostitutePhotoVerificationToken = $this->generatePhotoToken();
            Session::put('prostitutePhotoVerificationToken', $prostitutePhotoVerificationToken);
        }
        $formOptions = [
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all(),
            'token' => $prostitutePhotoVerificationToken,
            'voivodeships' => Voivodeship::all()
        ];
        return new JsonResponse($formOptions);
    }

}