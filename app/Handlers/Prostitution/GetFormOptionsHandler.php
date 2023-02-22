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
        if(Session::has('token')) {
            $token = Session::get('token');
        } else {
            $token = strtoupper(Str::random(rand(4,8)));
            Session::put('token', $token);
        }
        $formOptions = [
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all(),
            'token' => $token,
            'voivodeships' => Voivodeship::all()
        ];
        return new JsonResponse($formOptions);
    }

}