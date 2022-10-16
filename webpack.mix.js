const mix = require('laravel-mix');
var path = require('path');
const webpack = require('webpack')

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
//mix.vue3("resources/js/test.js', 'public/js");

mix.js('resources/js/mainpage.js', 'public/js').vue()
   .ts('resources/js/movies/category_specific.ts', 'public/js').vue()
   .ts('resources/js/movies/movies_set_complete.ts', 'public/js').vue()
   .ts('resources/js/movies/advanced_search.ts', 'public/js').vue()
   .js('resources/js/contact.js', 'public/js').vue()
   .js('resources/js/auth/request_password_reset_link.js', 'public/js').vue()
   .js('resources/js/auth/user/settings_panel.js', 'public/js').vue()
   .js('resources/js/auth/password_reset.js', 'public/js').vue()
   .js('resources/js/auth/password_reset_confirmation.js', 'public/js').vue()
   .ts('resources/js/auth/register.ts', 'public/js').vue()
   .ts('resources/js/pornstars/pornstar_profile.ts', 'public/js').vue()
   .ts('resources/js/pornstars/pornstars_list.ts', 'public/js').vue()
   .ts('resources/js/movies/single_movie.ts', 'public/js').vue()
   .ts('resources/js/auth/session_expired.ts', 'public/js').vue()
   .ts('resources/js/porn_dictionary.ts', 'public/js').vue()
   .ts('resources/js/news/news_list.ts', 'public/js').vue()
   .ts('resources/js/prostitution/prostitution_notice_creator_panel.ts', 'public/js').vue()
   .sass('resources/sass/auth/user/settings_panel.scss', 'public/css')
   .sass('resources/sass/pornstars/pornstar_profile.scss', 'public/css')
   .sass('resources/sass/auth/register.scss', 'public/css')
   .sass('resources/sass/movies/single_movie.scss', 'public/css')
   .sass('resources/sass/mainpage.scss', 'public/css')
   .sass('resources/sass/auth/password_reset.scss', 'public/css')
   .sass('resources/sass/auth/password_reset_confirmation.scss', 'public/css')
   .sass('resources/sass/pornstars/pornstars_list.scss', 'public/css')
   .sass('resources/sass/movies/advanced_search.scss', 'public/css')
   .sass('resources/sass/auth/session_expired.scss', 'public/css')
   .sass('resources/sass/porn_dictionary.scss', 'public/css')
   .sass('resources/sass/movies/category_specific.scss', 'public/css')
   .sass('resources/sass/contact.scss', 'public/css')
   .sass('resources/sass/movies/movies_set_complete.scss', 'public/css')
   .sass('resources/sass/news/news_list.scss', 'public/css')
   .sass('resources/sass/prostitution/prostitution_notice_creator_panel.scss', 'public/css')
  .options({ processCssUrls: false })
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import',  "@babel/plugin-transform-modules-commonjs"],
    presets: ["@babel/env"]
  })
  .webpackConfig({
    
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true,
      }),
    ],
    resolve: {
      alias: {
        '@js': path.resolve('resources/js'),
        '@jscomponents': path.resolve('resources/js/components'),
        '@jsmodules': path.resolve('resources/js/modules'),
        'sass': path.resolve('resources/sass'),
        'sasscomponent': path.resolve('resources/sass/components'),
        '@jscomponents-decoration': path.resolve("resources/js/components/decoration"),
        '@jscomponents-form-controls': path.resolve('resources/js/components/form_controls'),
        '@interfaces': path.resolve('resources/js/interfaces'),
        '@svgicon': path.resolve('resources/js/components/decoration/icons/svg'),
        '@config' : path.resolve('resources/js/config'),
        '@mixins' : path.resolve('resources/js/mixins')
      },
      extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx", ".svg"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/
        },

        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            'vue-svg-loader',
          ],
        },

        {
          test: /\.vue$/,
          loader: 'vue-loader',
        }
      ]
    }
  })
