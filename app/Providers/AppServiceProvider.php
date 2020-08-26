<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
     
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
        \Blade::aliasComponent('components.footer', 'footer');
        \Blade::aliasComponent('components.controls.nicecheckbox', 'nicecheckbox');
         \Blade::aliasComponent('components.error_list', 'error_list');
         \Blade::aliasComponent('components.report', 'report');
     
    }
}
