<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Helpers\Translators\PolishToEnglishTranslator;

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
  
    private $rules = [
            'registration_login' => ['required', 'string', 'max:20', 'min:3', 'unique:users,login'],
            'registration_email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'registration_password' => ['required', 'min:3', 'max:20'],
            'user_type' => 
            ['required','in:mężczyzną,kobietą,parą,hermafrodytą,transseksualistą,nie chcę podać'],
            'sexual_orientation' => 
            ['required', 'in:heteroseksualna,homoseksualna,biseksualna,autoseksualna,aseksualna,nie chcę podać'],
            'birth_date' => ['required', 'date']
        ];
    private $errorMessages = [
        'registration_login.required' => 'Nie podano loginu',
        'registration_login.string' => 'Login nie może składać się z samych liczb',
        'registration_login.max' => 'Login nie może przekraczać 20 znaków',
        'registration_login.min' => 'Login nie może mieć mniej niż 3 znaki',
        'registration_login.unique' => 'Login jest już zajęty przez innego użytkownika',
        'registration_email.required' => 'Nie podano adresu email',
        'registration_email.string' => 'Login nie może składać się z samych liczb',
        'registration_email.email' => 'Wartość podana jako adres email nie jest prawidłowym adresem email',
        'registration_email.max' => 'Długość adresu email nie może przekraczać 255 znaków',
        'registration_email.unique' => 'Adres email jest już wykorzystany przez innego użytkownika',
        'registration_password.required' => 'Nie podano hasła',
        'registration_password.min' => 'Hasło nie może mieć mniej niż 3 znaki',
        'registration_password.max' => "hasło nie może mieć więcej niż 20 znaków",
        'user_type.required' => 'Nie wybrano typu użytkownika',
        'user_type.in' => "Typ użytkownika może przyjmować jedynie te wartości zdefiniowane na rozwijanej liście",
        'sexual_orientation.required' => 'Nie podano orientacji',
        'sexual_orientation.in' => 'Orientacja seksualna może przyjmować jedynie te wartości zdefiniowane na rozwijanej liście',
        'birth_date.required' => 'Nie podano daty urodzenia',
        'birth_date.date' => 'Wartośc podana jako data urodzenia nie jest prawidłową datą',
        'birth_date.date_format' => 'Nieprawidłowy format daty urodzenia',
        'birth_date.after' => 'Nieprawidłowa data urodzenia - ludzie nie żyją dłużej niż 120 lat',
        'birth_date.before' => 'Nieprawidłowa data urodzenia - osoby niepełnoletnie nie mogą korzystać z serwisu'

    ];

    private $preparedData;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        return view('auth.login_or_register')->with([
          'randomImageNumber' => rand(1,3),
          'visibleForm' => 'registration'
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
        $this->preparedData = $this->prepareData($data);
        return Validator::make($this->preparedData, $this->rules, $this->errorMessages);
    }

    private function calculateDateYearsBeforeCurrentDay(int $offset)
    {
       $currentDay = date('d');
       $currentMonth = date('m');
       $currentYear = intval(date('Y'));
       $yearBeforeOffset = $currentYear - $offset;
       return "$yearBeforeOffset-$currentMonth-$currentDay";
    }

    private function prepareData(array $data) : array
    {
        $modifiedData = &$data;
        if(($data['year'] != 0) and ($data['month'] != 0)  and ($data['day'] != 0) )
        {
           $modifiedData['birth_date'] = $data['year'].'-'.$data['month'].'-'.$data['day'];
           $earliestDate = $this->calculateDateYearsBeforeCurrentDay(120);
           $dateEighteenYearsAgo = $this->calculateDateYearsBeforeCurrentDay(18); 
           array_push($this->rules['birth_date'], "after:$earliestDate");
           array_push($this->rules['birth_date'], "before:$dateEighteenYearsAgo");
        }
            
        return $modifiedData;
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
            'login' => $this->preparedData['registration_login'],
            'email' => $this->preparedData['registration_email'],
            'password' => Hash::make($this->preparedData['registration_password']),
            'birth_date' => $this->preparedData['birth_date'],
            'user_type' => PolishToEnglishTranslator::get($this->preparedData['user_type']),
            'sexual_orientation' => PolishToEnglishTranslator::get($this->preparedData['sexual_orientation'])
        ]);
    }
}
