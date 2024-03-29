const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.webpackConfig({
    module: {
      rules: [
        {
          // Matches all PHP or JSON files in `resources/lang` directory.
          test: /resources[\\\/]lang.+\.(php|json)$/,
          loader: 'laravel-localization-loader',
        },
        {
          test: /\.(pdf|mp3)$/,
          use: ["file-loader"],
        },
    {
      test: /\.node$/,
      use: ["node-loader"],
    }
     
      ]
    }
  });
mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .alias({
        '@': 'resources/js',
    });

if (mix.inProduction()) {
    mix.version();
}
