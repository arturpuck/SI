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
