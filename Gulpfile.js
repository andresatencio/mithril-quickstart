var gulp = require('gulp')
var msx = require('gulp-msx')

gulp.task('transform-jsx', function() {
  return gulp.src('./client/jsx/*.jsx')
    .pipe(msx({harmony: true}))
    .pipe(gulp.dest('./client/js/pages'))
})

gulp.task('default', ['transform-jsx']);