<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use App\Http\Requests\ShowPasswordResetConfirmationRequest;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    protected function validationErrorMessages()
    {
        return [
            'token.required' => 'password_reset_token_is_missing',
            'email.required' => 'email_is_missing',
            'email.email' => 'email_is_invalid',
            'password.required' => 'password_is_missing',
            'password.confirmed' => 'passwords_do_not_match',
            'password.min' => 'password_must_contain_at_least_3_characters'
        ];
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:3',
        ];
    }

    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.password_reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }

    protected function resetPassword($user, $password)
    {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));

        if(request()->has('log-me-in')){
            $this->guard()->login($user);
        }
        
    }

    protected function sendResetResponse(Request $request, $response)
    {
        if ($request->wantsJson()) {
            return new JsonResponse(['message' => trans($response)], 200);
        }
        
        return redirect(route('auth.password.reset.confirmation'))
                        ->with('email', $request->email);
    }

    public function showConfirmation(ShowPasswordResetConfirmationRequest $request)
    {
    	return view('auth.password_reset_confirmation')->with('email', $request->session()->get('email'));
    }
}
