var gulp = require('gulp');
var babel = require('gulp-babel');

/**
 * Pipes all JS files from the server source directory
 * through babel and copies the resulting files to the
 * compiled server directory.
 */
gulp.task('babel:server', function () {
  return gulp.src('src/server/**/*.js')
             .pipe(babel())
             .pipe(gulp.dest('compiled/server'));
});

/**
 * Watches the server source directory for changes and
 * triggers the babel:server task
 */
gulp.task('watch:server', function () {
  gulp.watch('src/server/**/*.js', ['babel:server'])
});

gulp.task('default', ['watch:server']);