<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

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

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember_me')
        );
    }

    protected function validateLogin(Request $request)
    {
        $customErrorMessages = [
           'password.required' => 'Nie podano hasła',
           $this->username().'required' => 'Nie podano loginu'
        ];

        $request->validate([
            $this->username() => 'required|string',
            'password' => 'required|string',
        ], $customErrorMessages);
    }

    public function showLoginForm()
    {
        return view('auth.login_or_register')->with([
            'randomImageNumber' => rand(1,3),
            'visibleForm' => 'login'
        ]);
    }
}
