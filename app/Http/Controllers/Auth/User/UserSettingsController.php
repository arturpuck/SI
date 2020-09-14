<?php

namespace App\Http\Controllers\Auth\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\UserType;
use App\SexualOrientation;
use App\Http\Requests\User\EditUserDataRequest;
use Symfony\Component\HttpFoundation\Response;

class UserSettingsController extends Controller
{
    public function showPanel(){
        return view('user.settings_panel')->with([
            'specificImageClass' => 'empire-background-image-'.rand(1,1),
            'userTypes' => UserType::all(),
            'sexualOrientations' => SexualOrientation::all()
        ]);
    }

    public function updateBasicSettings(EditUserDataRequest $request){
         return auth()->user()->modifyBasicData($request);
    }
}
