<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class GetFormOptionsHandler
{
    public function handle() : JsonResponse
    {
        $token = Str::random(rand(4,8));
        Session::put('token', $token);
        $formOptions = [
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all(),
            'token' => $token,
        ];
        return new JsonResponse($formOptions);
    }

}