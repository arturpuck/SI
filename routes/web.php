<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/','LaunchMainPageController@showMainPage');
Route::get('/','LaunchMainPageController@showMainPage');
Route::get('/verify-login/{login}', 'AJAXLoginValidationController@checkIfLoginAlreadyExists');
Route::get('/verify-email/{email}', 'AJAXEmailValidationController@checkIfEmailAlreadyExists');
Route::get('/kontakt', 'ContactFormController@showContactForm');
Route::post('/kontakt', 'ContactFormController@sendMessageFromUser')
       ->name('contact');



Route::namespace('Auth')->name('auth.')->group(function(){
       Route::post('/rejestruj', 'RegisterController@register')
             ->name('register.create');
       Route::get('/rejestruj', 'RegisterController@showRegistrationForm')
             ->name('register.form');
       Route::post('/password/reset/link', 'ForgotPasswordController@sendResetLinkEmail')
              ->name('request.password.reset.link');
       Route::get('/haslo/resetuj/{token}', 'ResetPasswordController@showResetForm')
              ->name('password.reset.form');
       Route::post('/password/reset', 'ResetPasswordController@reset')
               ->name('password.reset');



              Route::get('/wyloguj', 'LoginController@logout')
                    ->name('logout');
       
       Route::get('/haslo/potwierdzenie-zmiany', 'PasswordResetConfirmationController@showConfirmation' );
       Route::get('/haslo/resetuj/wyslij-link', 'ForgotPasswordController@showLinkRequestForm')
              ->name('password.reset.form');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
