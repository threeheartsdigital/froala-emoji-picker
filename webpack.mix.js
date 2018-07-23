const mix = require('laravel-mix');

mix.js('src/js/emoji-picker.js', 'build/emoji-picker.min.js')
    .sass('src/scss/emoji-picker.scss', 'build/emoji-picker.min.css');
