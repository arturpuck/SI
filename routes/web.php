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

Route::get('/','LaunchMainPageController@showMainPage')
      ->name('main.page');
Route::get('/kontakt', 'ContactFormController@showContactForm')
      ->name('contact.show.form');
Route::post('/contact/send-message', 'ContactFormController@sendMessageFromUser')
       ->name('contact.send.message');


Route::namespace('Movies')->name('movies.')->group(function(){

       Route::get('/filmy/najnowsze/strona/{pageNumber?}', 'MoviesController@getLatestMoviesPage')
             ->name('new');

       Route::get('/filmy/wyszukiwanie-zaawansowane', 'MoviesController@getAdvancedSearchPage')
             ->name('advanced.search');

});

Route::namespace('Pornstars')->name('pornstars.')->group(function(){
       
       Route::get('/gwiazdy-porno/lista', 'PornstarsController@getPornstarsList')
             ->name('list');

       Route::get('/pornstars/get-all', 'PornstarsController@getAllPornstars')
             ->name('all');
       
       Route::get('/gwiazda-porno/profil/{nickname?}', 'PornstarsController@showPornstarProfile')
              ->name('profile');
       
       Route::put('/rate/pornstar', 'PornstarsController@ratePornstar')->middleware('auth');

       Route::get('/pornstar/comments', 'PornstarsController@getPornstarComments');
       Route::post('/pornstar/comments/add', 'PornstarsController@addPornstarComment')->middleware('throttle:2,1');

});

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

              Route::group(['middleware' => ['api']], function () {
                     Route::get('/verify-login/{login}', 'RegisterController@checkIfLoginAlreadyExists');
                     Route::get('/verify-email/{email}', 'RegisterController@checkIfEmailAlreadyExists');  
                 });
       
});

Route::middleware(['auth'])->name('auth.user.')->namespace('Auth\User')->group(function(){

       Route::get('profil/ustawienia', 'UserSettingsController@showPanel')
              ->name('settings.show.panel');

       Route::patch('user/profile/settings/basic', 'UserSettingsController@updateBasicSettings')
              ->name('update.basic.settings')->middleware('api');

       Route::put('user/profile/settings/avatar', 'UserSettingsController@changeAvatar')
             ->name('upload.avatar')->middleware('api');

       Route::get('/validate/avatar', 'UserSettingsController@validateAvatar')
             ->name('validate.avatar')->middleware('api');

       Route::delete('user/profile/settings/avatar/delete', 'UserSettingsController@deleteAvatar')
             ->name('delete.avatar')->middleware('api');
       
       Route::patch('user/profile/settings/password/change', 'UserSettingsController@changePassword')
             ->name('change.password')->middleware('api');
       
       Route::patch('user/profile/settings/other/change', 'UserSettingsController@changeOtherSettings')
             ->name('change.password')->middleware('api');

});

