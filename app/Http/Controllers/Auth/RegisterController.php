<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Http\Requests\User\AJAXLoginValidationRequest;
use App\Http\Requests\User\AJAXEmailValidationRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\UserType;
use App\SexualOrientation;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    protected $errorMessages = [
       'login.required' => 'login_is_missing',
       'login.string' => 'login_must_be_a_string',
       'login.min' => 'login_must_contain_at_least_3_characters',
       'login.max' => 'login_must_not_exceed_20_characters',
       'login.unique' => 'login_has_already_been_taken',
       'email.required' => 'email_is_missing',
       'email.string' => 'email_must_be_a_string',
       'email.email' => 'email_is_invalid',
       'email.max' => 'email_must_not_exceed_255_characters',
       'email.unique' => 'email_has_already_been_taken',
       'password.required' => 'password_is_missing',
       'password.min' => 'password_must_contain_at_least_3_characters',
       'password.max' => 'password_must_not_exceed_20_characters',
       'user_type_id.exists' => 'user_type_option_has_not_been_selected',
       'sexual_orientation_id.exists' => 'sexual_orientation_has_not_been_selected',
       'birth_date.required' => 'birth_date_is_required',
       'birth_date.date' => 'birth_date_has_incorrect_format',
       'birth_date.before_or_equal' => 'you_have_to_be_at_least_18_years_old',
       'birth_date.after_or_equal' => 'date_is_too_old_humans_dont_live_that_long',

    ];

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    function checkIfLoginAlreadyExists(AJAXLoginValidationRequest $request, $login)
    {
       return response('valid', 200)->header('Content-Type', 'text/plain');    
    }

    function checkIfEmailAlreadyExists(AJAXEmailValidationRequest $request, $email)
    {
      return response('valid', 200)->header('Content-Type', 'text/plain');           
    }

    public function showRegistrationForm()
    {
        return view('auth.register')->with([
          'specificImageClass' => 'register-background-image-'.rand(1,3),
          'sexualOrientations' => SexualOrientation::all(),
          'userTypes' => UserType::all()
        ]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $date =  new Carbon();
        $date18YearsAgo = $date->subYears(18)->format('Y-m-d');
        $date = new Carbon();
        $date120yearsAgo = $date->subYears(120)->format('Y-m-d');

        return Validator::make($data, [
            'login' => ['required', 'string', 'max:20', 'min:3', 'unique:users,login'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:3', 'max:20'],
            'user_type_id' => ['nullable', 'exists:user_types,id'],
            'sexual_orientation_id' => ['nullable', 'exists:sexual_orientations,id'],
            'birth_date' => ['required', 'date', 'before_or_equal:'.$date18YearsAgo, 'after_or_equal:'.$date120yearsAgo]
        ], $this->errorMessages);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        
        return User::create([
            'login' => $data['login'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'],),
            'user_type_id' => $data['user_type_id'],
            'sexual_orientation_id' => $data['sexual_orientation_id'],
            'birth_date' => $data['birth_date']
        ]);
    }

    protected function registered(Request $request, $user)
    {
        session(['success' => 'Zostałeś zarejestrowany pomyślnie']);
    }
}
