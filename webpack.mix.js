const mix = require('laravel-mix');

mix.js('src/js/froala-emoji-picker.js', 'build/froala-emoji-picker.min.js')
    .sass('src/scss/froala-emoji-picker.scss', 'build/froala-emoji-picker.min.css');
