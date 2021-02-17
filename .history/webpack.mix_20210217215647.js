const mix = require('laravel-mix');
require('laravel-mix-svg-vue');
var path = require('path');

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

mix.js('resources/js/mainpage.js', 'public/js').vue()
    .sass('resources/sass/mainpage.scss', 'public/css')
    .svgVue()
    .options({autoprefixer : true, processCssUrls: false, postCss: [
      require('autoprefixer'),
    ]})
    .babelConfig({
      plugins: ['@babel/plugin-syntax-dynamic-import'],
      presets: ["@babel/preset-env", "vue"]
    })
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
                '@interfaces' : path.resolve('resources/js/interfaces'),
                '@svgicon' : path.resolve('resources/images/decoration/icons/svg')
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
            ]
          }
    })
