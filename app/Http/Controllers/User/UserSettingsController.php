<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;

class UserSettingsController extends Controller
{
    public function showPanel(){
        return view('user.settings_panel');
    }
}
