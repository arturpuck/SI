<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ShowPasswordResetConfirmationRequest;

class PasswordResetConfirmationController extends Controller
{
    public function showConfirmation(ShowPasswordResetConfirmationRequest $request)
    {
    	return view('auth.password_reset_confirmation');
    }
}
