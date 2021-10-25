<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;

class ViewProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        

        View::composer("*", function($view) {

            $viewNames = [
                "contact",
                "mainpage",
                "register",
                "request_password_reset_link",
                "password_reset_confirmation",
                "settings_panel",
                "movies_set_complete",
                'pornstars_list',
                'pornstar_profile',
                'advanced_search',
                'category_specific',
                'single_movie',
                'session_expired'
            ];

            $viewName = Str::afterLast($view->getName(), ".");

            if(in_array($viewName, $viewNames)){
                View::share('cssFilePath', asset("css/".$viewName.".css"));
                View::share('jsFilePath',  asset("js/".$viewName.".js"));
            }
            
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
