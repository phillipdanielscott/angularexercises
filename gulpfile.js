// 'use strict'
var gulp = require('gulp');
// var browserify = require('gulp-sass');
var browserify = require('gulp-browserify');


gulp.task('default', ['html','js', 'watch'], function (){

});

gulp.task('html', function () {
  gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));
    gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
    // what to do for this task.
});

// Convert SASS into CSS
// gulp.task('css', function () {
//     gulp.src('./styles.css')
//         .pipe(gulp.dest('./public'));
// });

// gulp.task('js', function () {
//     gulp.src('./main.js')
//         .pipe(gulp.dest('./public'));
// });

gulp.task('js', function () {
    gulp.src('./js/app.js')
       .pipe(browserify({
        //     mangle: true,
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    // files to watch, then what tasks to run when they change
    gulp.watch('./styles.css', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./*.js', ['js']);
    gulp.watch('./views/*.js',['js']);
    gulp.watch('./models/*.js',['js']);

})
