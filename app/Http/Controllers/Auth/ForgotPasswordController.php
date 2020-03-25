<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function showLinkRequestForm()
    {
        return view('auth.request_password_reset_link');
    }

    protected function validateEmail(Request $request)
    {
        $errorMessages = [
           'email.required' => 'Nie podano adresu email',
           'email.email' => 'Wprowadzony tekst nie jest poprawnym adresem email',
           'email.exists' => 'Podany adres email nie istnieje'
        ];
        $request->validate(['email' => 'required|email|exists:users'], $errorMessages);
    }
}
