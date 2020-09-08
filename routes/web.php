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
Route::group(['middleware' => ['api']], function () {
       Route::get('/verify-login/{login}', 'AJAXLoginValidationController@checkIfLoginAlreadyExists');
       Route::get('/verify-email/{email}', 'AJAXEmailValidationController@checkIfEmailAlreadyExists');  
   });

Route::get('/','LaunchMainPageController@showMainPage');
Route::get('/kontakt', 'ContactFormController@showContactForm')
      ->name('contact.show.form');
Route::post('/contact/send-message', 'ContactFormController@sendMessageFromUser')
       ->name('contact.send.message');

Route::namespace('Auth')->name('auth.')->group(function(){
       Route::post('/rejestruj', 'RegisterController@register')
             ->name('register.create');
       Route::get('/rejestruj', 'RegisterController@showRegistrationForm')
             ->name('register.form');
       Route::post('/password/reset/link', 'ForgotPasswordController@sendResetLinkEmail')
              ->name('request.password.reset.link');
       Route::get('/haslo/resetuj/wyslij-link', 'ForgotPasswordController@showLinkRequestForm')
              ->name('request.password.reset.link.form');
       Route::get('/haslo/resetuj/{token}', 'ResetPasswordController@showResetForm')
              ->name('password.reset.form');
       Route::post('/password/reset', 'ResetPasswordController@reset')
               ->name('password.reset');
       Route::post('/login', 'LoginController@login')
              ->name('login');

       Route::post('/wyloguj', 'LoginController@logout')
                    ->name('logout');
       Route::get('/haslo/potwierdzenie-zmiany', 'ResetPasswordController@showConfirmation')
              ->name('password.reset.confirmation');
       
});

Route::middleware(['auth'])->name('auth.user.')->namespace('Auth\User')->group(function(){

       Route::get('profil/ustawienia', 'UserSettingsController@showPanel')
              ->name('settings.show.panel');

});

