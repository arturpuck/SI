<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        \Blade::component('components.decoration.icon_error_cross', 'icon-error-cross');
        \Blade::component('components.decoration.icon_confirmation', 'icon-confirmation');
        \Blade::component('components.movies_set', 'movies-set');
        \Blade::component('components.links_container', 'links-container');
        \Blade::component('components.decoration.authenticated_user_preview', 'authenticated-user-preview');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('current_password',
        function($attribute, $value, $parameters, $validator){
            return \Hash::check($value, auth()->user()->password);
        });
    }
}
