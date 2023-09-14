<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    private $loginAttemptErrorMessages = [
        'login-or-email.required' => 'user_identification_is_missing',
        'login-or-email.string' => 'user_identification_must_be_a_string',
        'password.required' => 'password_is_required',
        'password.string' => 'password_must_be_a_string'
    ];

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    public function username()
    {
        $userIdentification = request()->get('login-or-email');
        return (User::where("email", $userIdentification)->exists()) ? 'email' : 'login';
    }

    public function redirectTo(){
        return url()->previous();
    }

    protected function loggedOut(Request $request){
        return back();
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            'login-or-email' => 'required|string',
            'password' => 'required|string',
        ], $this->loginAttemptErrorMessages);
    }

    protected function credentials(Request $request)
    {
        return ['password' => $request->password, $this->username() => $request->get('login-or-email')];
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            'error' => 'invalid_authorisation_data'
        ]);
    }

    protected function sendLockoutResponse(Request $request)
    {
        $seconds = $this->limiter()->availableIn(
            $this->throttleKey($request)
        );

        throw ValidationException::withMessages([
            $this->username() => ['to_many_login_attempts'],
        ])->status(Response::HTTP_TOO_MANY_REQUESTS);
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
