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

mix.sass('resources/sass/auth/register.scss', 'public/css/auth')
.sass('resources/sass/contact.scss', 'public/css')
.sass('resources/sass/mainpage/mainpage.scss', 'public/css')
.options({
      processCssUrls: false}).js('resources/js/contact.js', 'public/js')
.js('resources/js/mainpage.js', 'public/js')
.js('resources/js/register.js', 'public/js')
.js('resources/js/password_reset.js', 'public/js')
.sass('resources/sass/auth/password_reset.scss', 'public/css')
.sass('resources/sass/auth/password_reset_confirmation.scss', 'public/css');
