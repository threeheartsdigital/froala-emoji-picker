const mix = require('laravel-mix');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery'
    }
});

mix.js('src/js/emojis.js', 'build/emojis.min.js')
    .sass('src/scss/emojis.scss', 'build/emojis.min.css');
