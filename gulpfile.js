'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
// const cleanCSS = require('gulp-clean-css');

const uglify = require('gulp-uglify').default;
const concat = require('gulp-concat');
const jquery = require('jquery');



sass.compiler = require('node-sass');

gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('styles'));
});


gulp.task('copy-bootstrap', function () {
    gulp.src(node_modules/bootstrap)
        .pipe(gulp.dest('src/sass/bootstrap'));
});

gulp.task('copy-font-awesome', function () {
    gulp.src('node_modules/@font-awesome/fontawesome-free/webfonts')
});
gulp.task('concatenation', function () {
    return gulp
        .src([
                './node_modules/bootstrap/dist/css/bootstrap.css',
                './node_modules/@fontawesome/fontawesome-free/css/all.css'
            ]
        )
        .pipe(uglify())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('build/css'));
});






// // ======= //
//
// gulp.task('style', function (done) {
//     return gulp.src('scss/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('build/css'));
//
//     done();
// });
//
// gulp.task('style:watch', function () {
//     return gulp
//         .watch(
//             'scss/*.scss',
//             gulp.series('style')
//         );
// });
//
