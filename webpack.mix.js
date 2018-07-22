const mix = require('laravel-mix');

mix.js('src/js/froala-emoji-picker.js', 'build')
    .sass('src/scss/froala-emoji-picker.scss', 'build');
