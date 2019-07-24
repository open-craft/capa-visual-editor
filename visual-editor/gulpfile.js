const gulp = require('gulp');
const sass = require('gulp-sass');
const concat       = require('gulp-concat');
const cleanCss     = require('gulp-clean-css');
const autoprefixer    = require('gulp-autoprefixer');
const copy         = require('gulp-copy');

const path = require('path');

const static = path.resolve(__dirname);

gulp.task('pack-css', function () {
    return gulp.src(['build/static/css/*'])
        .pipe(concat('assets/css/stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(static));
});

gulp.task('pack-js', function () {
    return gulp.src(['build/static/js/[0123456789]{1}*.chunk.js', 'build/static/js/main*.chunk.js'])
      .pipe(concat('assets/js/bundle.js'))
      .pipe(gulp.dest(static));
});

gulp.task('pack-scss', function () {
    return gulp.src(['assets/scss/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(concat('css/admin-stylesheet.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest(static));
});

gulp.task('copy-images', function () {
    return gulp.src('build/static/media/*')
           .pipe(copy('assets/images', {prefix:3}));
});

gulp.task('sass:watch', function () {
    return gulp.watch('assets/scss/**/*.scss', gulp.series('pack-scss'));
});

gulp.task('default', gulp.series('pack-css', 'pack-js', 'copy-images'));
