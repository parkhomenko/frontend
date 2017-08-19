var gulp = require("gulp");
var eslint = require("gulp-eslint");

var jsFiles = ["**/*.js", "!node_modules/**", "!dist/**"];

gulp.task("lint", function() {
    return gulp.src(jsFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("lint-fix", function() {
    return gulp.src(jsFiles)
        .pipe(eslint({fix: true}))
        .pipe(eslint.format())
        .pipe(gulp.dest("."));
});

gulp.task("default", ["lint"], function() {});