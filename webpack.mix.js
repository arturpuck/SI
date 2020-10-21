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
.js('resources/js/contact.ts', 'public/js')
.js('resources/js/auth/request_password_reset_link.js', 'public/js')
.js('resources/js/auth/password_reset.js', 'public/js')
.js('resources/js/auth/password_reset_confirmation.js', 'public/js')
.js('resources/js/auth/user/settings_panel.js', 'public/js')
.js('resources/js/movies/movies_set_complete.ts', 'public/js')
.js('resources/js/pornstars/pornstars_list.ts', 'public/js')
.js('resources/js/pornstars/pornstar_profile.ts', 'public/js')
    .sass('resources/sass/mainpage.scss', 'public/css')
    .sass('resources/sass/movies_set_complete.scss', 'public/css')
    .sass('resources/sass/contact.scss', 'public/css')
    .sass('resources/sass/auth/password_reset.scss', 'public/css')
    .sass('resources/sass/auth/register.scss', 'public/css')
    .sass('resources/sass/auth/password_reset_confirmation.scss', 'public/css')
    .sass('resources/sass/auth/user/settings_panel.scss', 'public/css')
    .sass('resources/sass/pornstars/pornstars_list.scss', 'public/css')
    .sass('resources/sass/pornstars/pornstar_profile.scss', 'public/css')
    .options({processCssUrls: false})
    .webpackConfig({
        resolve: {
            alias: {
                '@js' : path.resolve('resources/js'),
                '@jscomponents' : path.resolve('resources/js/components'),
                '@jsmodules' : path.resolve('resources/js/modules'),
                'sass' : path.resolve('resources/sass'),
                'sasscomponent' : path.resolve('resources/sass/components'),
                '@jscomponents-decoration' : path.resolve("resources/js/components/decoration"),
                '@jscomponents-form-controls' : path.resolve('resources/js/components/form_controls'),
                '@interfaces' : path.resolve('resources/js/interfaces')
            },
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        },

        module: {
            rules: [
              {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] },
                exclude: /node_modules/
              }
            ]
          }
    })
