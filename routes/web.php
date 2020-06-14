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
Route::get('/verify-login/{login}', 'AJAXLoginValidationController@checkIfLoginAlreadyExists');
Route::get('/verify-email/{email}', 'AJAXEmailValidationController@checkIfEmailAlreadyExists');
Route::get('/kontakt', 'ContactFormController@showContactForm');
Route::post('/kontakt', 'ContactFormController@sendMessageFromUser');
Route::Auth();
Route::namespace('Auth')->name('auth.')->group(function(){
   Route::get('/wyloguj', 'LoginController@logout')
          ->name('logout');
   Route::get('/potwierdzenie-zmiany-hasla', 'PasswordResetConfirmationController@showConfirmation' );
   Route::get('/rejestruj', 'RegisterController@showRegistrationForm')
          ->name('register.form');
   Route::get('/zaloguj', 'LoginController@showLoginForm')
          ->name('login.form');
});

