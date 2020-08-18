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
        
        \Blade::aliasComponent('components.navbar', 'navbar');
        \Blade::aliasComponent('components.footer', 'footer');
        \Blade::aliasComponent('components.controls.nicecheckbox', 'nicecheckbox');
        \Blade::aliasComponent('components.controls.single_line_labeled_text_input', 'single_line_labeled_text_input');
        \Blade::aliasComponent('components.controls.described_select', 'described_select');
        \Blade::aliasComponent('components.controls.date_picker_polish', 'date_picker_polish');
         \Blade::aliasComponent('components.error_list', 'error_list');
         \Blade::aliasComponent('components.controls.submit_button', 'submit_button');
     
    }
}
