<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;
use App\Voivodeship;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class GetFormOptionsHandler
{
    public function handle() : JsonResponse
    {
        if(Session::has('prostitutePhotoVerificationToken')) {
            $prostitutePhotoVerificationToken = Session::get('prostitutePhotoVerificationToken');
        } else {
            $prostitutePhotoVerificationToken = strtoupper(Str::random(rand(4,8)));
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