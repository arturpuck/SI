const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/mainpage.js', 'public/js')
.js('resources/js/auth/register.js', 'public/js')
.js('resources/js/contact.js', 'public/js')
.js('resources/js/auth/request_password_reset_link.js', 'public/js')
.js('resources/js/auth/password_reset.js', 'public/js')
.js('resources/js/auth/password_reset_confirmation.js', 'public/js')
    .sass('resources/sass/mainpage.scss', 'public/css')
    .sass('resources/sass/contact.scss', 'public/css')
    .sass('resources/sass/auth/password_reset.scss', 'public/css')
    .sass('resources/sass/auth/register.scss', 'public/css')
    .sass('resources/sass/auth/password_reset_confirmation.scss', 'public/css')
    .options({processCssUrls: false});
