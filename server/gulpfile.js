var gulp = require("gulp");
var eslint = require("gulp-eslint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minify = require("gulp-minify-css");
var uglify = require("gulp-uglify");

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

gulp.task("sass", function() {
    return gulp.src("./src/public/sass/*.scss")
        .pipe(concat("styles.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(minify())
        .pipe(gulp.dest("./src/public"));
});

gulp.task("scripts", function() {
    return gulp.src("./src/public/js/*.js")
        .pipe(concat("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./src/public"));
});

gulp.task("minify", ["sass", "scripts"], function() {});

gulp.task("default", ["lint"], function() {});