const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require("gulp-autoprefixer");

function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
};

function prefix() {
    return gulp.src('./css/styles.css')
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
};

function watch() {
    gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
exports.prefix = prefix;