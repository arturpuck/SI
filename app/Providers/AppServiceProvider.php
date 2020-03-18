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
        
        \Blade::component('components.main_page_navbar', 'main_page_navbar');
        \Blade::component('components.footer', 'footer');
        \Blade::component('components.controls.nicecheckbox', 'nicecheckbox');
        \Blade::component('components.controls.single_line_labeled_text_input', 'single_line_labeled_text_input');
        \Blade::component('components.controls.described_select', 'described_select');
        \Blade::component('components.controls.date_picker_polish', 'date_picker_polish');
         \Blade::component('components.error_list', 'error_list');
     
    }
}
