<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;

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
    protected $redirectTo = '/potwierdzenie-zmiany-hasla';

    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.password_reset_form')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }

    protected function sendResetResponse(Request $request)
    {
        return redirect($this->redirectPath())
                            ->with('email', $request->email);
    }

    protected function resetPassword($user, $password, $automaticLogin)
    {
        $this->setUserPassword($user, $password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));

        if($automaticLogin)
        {
          $this->guard()->login($user);  
        }
        
    }

    public function reset(Request $request)
    {
        $rules = [
            'token' => 'required',
            'email' => 'required|email|exists:users',
            'password' => 'required|confirmed|min:3|max:20'
        ];

        $errorMessages = [
           'token.required' => 'Brak tokena, prosimy spróbować ponownie',
           'email.required' => 'Nie podano adresu email',
           'email.email' => 'Wprowadzony adres email ma niewłaściwy format',
           'email.exists' => 'Wprowadzony adres email nie istnieje',
           'password.required' => 'Należy podać hasło',
           'password.confirmed' => 'Wprowadzone hasło nie pokrywa się z potwierdzeniem',
           'password.min' => 'Hasło musi mieć co najmniej 3 znaki',
           'password.max' => 'Hasło nie może mieć więcej niż 20 znaków'
        ];

        $request->validate($rules, $errorMessages);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) use ($request) {
                $this->resetPassword($user, $password, $request->has('log-me-in'));
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        return $response == Password::PASSWORD_RESET
                    ? $this->sendResetResponse($request)
                    : $this->sendResetFailedResponse($request, $response);
    }

    
}
