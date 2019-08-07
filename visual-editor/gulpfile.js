const gulp = require('gulp');
const concat       = require('gulp-concat');
const cleanCss     = require('gulp-clean-css');
const exec = require('child_process').exec;
const replace = require('gulp-replace');
const clean        = require('gulp-clean');
const nop = require('gulp-nop');

const path = require('path');

const static = path.resolve(__dirname);

gulp.task('pack-css', function () {
    return gulp.src(['build/static/css/*'])
        .pipe(replace('/static/media/', '/static/studio/visual-editor/media/'))
        .pipe(concat('visual-editor/css/stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(static));
});

gulp.task('pack-js', function () {
    return gulp.src(['build/static/js/*.js'])
      .pipe(concat('visual-editor/js/bundle.js'))
      .pipe(gulp.dest(static));
});

gulp.task('copy-images', function () {
    return gulp.src('build/static/media/*')
            .pipe(gulp.dest('visual-editor/media/'));
});

gulp.task('copy-vendor', function () {
    return gulp.src('public/vendor/*.js')
            .pipe(gulp.dest('visual-editor/vendor/'));
});

gulp.task('clean-build', function () {
    return gulp.src(['build',], {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

gulp.task('build', function (cb) {
    return exec('npm run build', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default', gulp.series('build', 'pack-css', 'pack-js', 'copy-images', 'copy-vendor', 'clean-build'));
