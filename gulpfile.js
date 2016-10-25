// http://flexbox.io/
// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    // source files
    gulp.src('app/css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    // source files
    gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/css/*.css', ['styles']);
    gulp.watch('app/*.html', browserSync.reload);
    // gulp.watch('app/js/**/*.js', browserSync.reload);
});
