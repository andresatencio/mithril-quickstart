var gulp = require('gulp')
var msx = require('gulp-msx')
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('transform-jsx', function() {
  return gulp.src('./client/jsx/*.jsx')
    .pipe(msx({harmony: true}))
    .pipe(gulp.dest('./client/js/pages'))
});

gulp.task('browserify', function() {
  return gulp.src('./client/js/app.js')
  	.pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./build'))
});

gulp.task('default', ['transform-jsx']);

gulp.task('build', ['transform-jsx', 'browserify']);