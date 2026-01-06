const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src('public/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', gulp.series('css'));
});
