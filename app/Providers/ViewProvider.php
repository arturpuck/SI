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
                "request_password_reset_link"
            ];

            $viewName = Str::afterLast($view->getName(), ".");

            if(in_array($viewName, $viewNames)){
                View::share('CSSFilePath', asset("css/".$viewName.".css"));
                View::share('JSFilePath',  asset("js/".$viewName.".js"));
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
