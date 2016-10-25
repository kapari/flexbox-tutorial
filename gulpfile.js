var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    // source files
    gulp.src('app/css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    // source files
    gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});
