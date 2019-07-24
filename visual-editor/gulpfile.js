const gulp = require('gulp');
const concat       = require('gulp-concat');
const cleanCss     = require('gulp-clean-css');
const exec = require('child_process').exec;
const replace = require('gulp-replace');
const clean        = require('gulp-clean');
const nop = require('gulp-nop');

const path = require('path');

const static = path.resolve(__dirname);
const studioStatic = path.resolve(process.env.CONFIG_ROOT || '', 'edx-platform/cms/static/images');

gulp.task('pack-css', function () {
    return gulp.src(['build/static/css/*'])
        .pipe(replace('/static/media/', '/static/studio/images/'))
        .pipe(concat('assets/css/stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(static));
});

gulp.task('pack-js', function () {
    return gulp.src(['build/static/js/!(main)*.chunk.js', 'build/static/js/main.*.chunk.js'])
      .pipe(concat('assets/js/bundle.js'))
      .pipe(gulp.dest(static));
});

gulp.task('copy-images', function () {
    if (process.env.CONFIG_ROOT !== undefined) {
        return gulp.src('build/static/media/*')
               .pipe(gulp.dest(studioStatic));
    }
    return gulp.src('.').pipe(nop());
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

gulp.task('default', gulp.series('build', 'pack-css', 'pack-js', 'copy-images', 'clean-build'));
