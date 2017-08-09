var gulp = require('gulp');
var eslint = require('gulp-eslint');

var jsFiles = ['src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(eslint());
});