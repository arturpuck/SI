<?php

namespace App\Http\Controllers\Auth\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\UserType;
use App\SexualOrientation;
use App\Http\Requests\User\EditUserDataRequest;
use App\Http\Requests\User\AvatarValidationRequest;
use App\Http\Requests\User\ChangeAvatarRequest;
use App\Http\Requests\User\ChangeUserPasswordRequest;
use App\Http\Requests\User\ChangeOtherUserSettingsRequest;
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

    public function validateAvatar(AvatarValidationRequest $request){
        return response('success', 200)->header('Content-Type', 'text/plain');
    }

    public function changeAvatar(ChangeAvatarRequest $request){
        return auth()->user()->changeAvatar($request);
    }

    public function deleteAvatar(){
        return auth()->user()->deleteAvatar();
    }

    public function changePassword(ChangeUserPasswordRequest $request){
        return auth()->user()->changePassword($request);
    }

    public function changeOtherSettings(ChangeOtherUserSettingsRequest $request){
         return auth()->user()->changeOtherSettings($request);
    }
}
