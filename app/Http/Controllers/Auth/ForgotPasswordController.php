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

     protected function sendResetLinkResponse(Request $request, $response)
    {
        return back()->with('success', "Link został wysłany pod wskazany adres");
    }

    /**
     * Get the response for a failed password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return back()->withErrors(['email' => 'Wprowadzone dane są najprawdopodobniej poprawne, jednak nastąpił bliżej nieokreślony błąd. Być może ponowna próba powiedzie się.']);
                
    }
}
