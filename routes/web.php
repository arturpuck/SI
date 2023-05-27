<?php

use App\Http\Controllers\API\CountryRegionsController;

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

Route::get('sitemap.xml', 'SiteMapGeneratorController@generateSiteMap');

Route::get('/', 'LaunchMainPageController@showMainPage')
    ->name('main.page');

Route::get('/kontakt', 'ContactFormController@showContactForm')
    ->name('contact.show.form');

Route::post('/contact/send-message', 'ContactFormController@sendMessageFromUser')
    ->name('contact.send.message');

Route::get('porno-słownik/{range?}', 'PornDictionaryController@showDictionary')->name('dictionary.list');

Route::get('/aktualności/{pageNumber?}', 'NewsController@showNews')->name('news.list');


Route::namespace ('Movies')->name('movies.')->group(function () {

    Route::get('/filmy/najnowsze/strona/{pageNumber?}', 'MoviesController@getLatestMoviesPage')
        ->name('new');

    Route::get('/filmy/najpopularniejsze/strona/{pageNumber?}', 'MoviesController@getTheMostPopularMoviesPage')
        ->name('the-most-popular');

    Route::get('/filmy/wyszukiwanie-zaawansowane', 'MoviesController@getAdvancedSearchPage')
        ->name('advanced.search.panel');

    Route::get('/movies/advanced-search', 'MoviesController@advancedSearch')
        ->name('advanced.search')->middleware('throttle:20,1');

    Route::get('/filmy/kategoria/{categoryName}/{pageNumber?}', 'MoviesController@getMoviesByCategory')
        ->name('category.specific');

    Route::get('/film-{movieID}/{slug}', 'MoviesController@showSingleMovie')
        ->name('show.single');

    Route::put('/rate/movie', 'MoviesController@rateMovie')
        ->name('rate')->middleware('auth');

    Route::put('/add/spermatozoid', 'MoviesController@addSpermatozoid')
        ->name('rate.spermatozoid')->middleware('auth');

    Route::put('/movie/toggle-like', 'MoviesController@toggleLike')
        ->name('add.like')->middleware('auth');

    Route::get('/movie/similar/{movie}', 'MoviesController@getSimilarMovies')
              ->name('similar');

    Route::get('/movie/details/{movieID}', 'MoviesController@getMovieDetails')
              ->name('details');

    Route::get('/movie/comments', 'MoviesController@getMovieComments')
               ->name('get.comments');

    Route::post('/movie/add-comment', 'MoviesController@addMovieComment')
              ->name('add.comment')->middleware('throttle:2,1');
});

Route::namespace ('Pornstars')->name('pornstars.')->group(function () {

    Route::get('/gwiazdy-porno/lista', 'PornstarsController@getPornstarsList')
        ->name('list');

    Route::get('/pornstars/advanced-search/list', 'PornstarsController@getPornstarListForAdvancedSearch')
        ->name('all')->middleware('throttle:10,1');

    Route::get('/gwiazda-porno/profil/{nickname?}', 'PornstarsController@showPornstarProfile')
        ->name('profile');

    Route::put('/rate/pornstar', 'PornstarsController@ratePornstar')->middleware('auth');

    Route::get('/pornstar/comments', 'PornstarsController@getPornstarComments');
    Route::post('/pornstar/comments/add', 'PornstarsController@addPornstarComment')->middleware('throttle:2,1');
    Route::get('pornstar/rating', 'PornstarsController@getPornstarRating')
          ->name('rating');
});

Route::namespace ('Auth')->name('auth.')->group(function () {

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

    Route::group(['middleware' => ['throttle:10,1']], function () {
        Route::get('/verify-login/{login}', 'RegisterController@checkIfLoginAlreadyExists')->name('verify-login');
        Route::get('/verify-email/{email}', 'RegisterController@checkIfEmailAlreadyExists')->name('verify-email');
    });
});

Route::middleware(['auth'])->name('auth.user.')->namespace('Auth\User')->group(function () {

    Route::get('profil/ustawienia', 'UserSettingsController@showPanel')
        ->name('settings.show.panel');

    Route::group(['prefix' => 'user/profile/settings/'], function() {

        Route::patch('basic', 'UserSettingsController@updateBasicSettings')
            ->name('update.basic.settings')->middleware('throttle:5,1');

        Route::put('avatar', 'UserSettingsController@changeAvatar')
            ->name('upload.avatar');

        Route::delete('avatar/delete', 'UserSettingsController@deleteAvatar')
            ->name('delete.avatar');

        Route::patch('password/change', 'UserSettingsController@changePassword')
            ->name('change.password')->middleware('throttle:3,1');

        Route::patch('other/change', 'UserSettingsController@changeOtherSettings')
            ->name('change.other')->middleware('throttle:5,1');

    });

    Route::delete('/delete/account', 'DeleteAccountController@deleteAccount')
         ->name('delete.account');
});

Route::namespace ('Prostitution')->prefix('prostytucja/')->name('prostitution.')->group(function () {

    Route::get('dodaj-ogłoszenie', 'CreateProstitutionNoticeController@showCreatorPanel')
        ->name('creator.panel')->middleware('auth');

    Route::get('notice-form-options', 'CreateProstitutionNoticeController@getNoticeFormOptions')
        ->name('notice-form-options')->middleware('authWithoutRedirecting');

    Route::post('dodaj-ogłoszenie', 'CreateProstitutionNoticeController@createProstitutionAnnouncement')
        ->name('create.announcement')->middleware('authWithoutRedirecting');

    Route::get('lista-moich-ogłoszeń', 'ProstitutionListController@showAnnouncementsList')
        ->name('show.announcements.list')->middleware('auth');

    Route::get('announcements', 'ProstitutionListController@getAnnouncementInformation')
        ->name('announcement.information')->middleware('authWithoutRedirecting');

    Route::delete('announcements', 'ProstitutionListController@deleteAnnouncement')
        ->name('announcement.deletion')->middleware('authWithoutRedirecting');

    Route::put('photo-token', 'ProstitutionAnnouncementTokenController@setVerificationToken')
        ->name('announcement.set-photo-token')->middleware(['authWithoutRedirecting', 'throttle:10,1']);

    Route::delete('photo-token', 'ProstitutionAnnouncementTokenController@unsetVerificationToken')
        ->name('announcement.unset-photo-token');

});

Route::middleware(['authWithoutRedirecting'])->group(function(){
    Route::get('/cities', [CountryRegionsController::class, 'getCities']);

});
