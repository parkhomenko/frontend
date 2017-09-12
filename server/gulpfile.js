var gulp = require("gulp");
var eslint = require("gulp-eslint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minify = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var livereload = require("gulp-livereload");
var sequence = require("run-sequence");

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

gulp.task("js", function() {
    return browserify({
        entries: ["./src/public/js/main.js"],
        debug: true
    })
        .transform("babelify", {presets: ["es2015", "stage-3"]})
        .bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./src/public"))
        .pipe(livereload());
});

gulp.task("watch", ["js"], function() {
    livereload.listen();
    gulp.watch("./src/public/js/**/*.js", ["js"]);
});

gulp.task("assemble", ["sass", "js"], function() {});

gulp.task("build", function(done) {
    sequence("lint", "assemble", done);
});

gulp.task("default", ["build"], function() {});
