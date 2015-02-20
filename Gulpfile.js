var gulp = require('gulp');
var msx = require('gulp-msx');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var babel = require("gulp-babel");

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

gulp.task('babel', function () {
	return gulp.src('./build/bundle.js')
		.pipe(babel())
		.pipe(rename('bundle-es6.js'))
    	.pipe(gulp.dest('./build'))
})

gulp.task('default', ['transform-jsx']);

gulp.task('build', ['transform-jsx', 'browserify']);

gulp.task('es6', ['transform-jsx', 'browserify', 'babel'])