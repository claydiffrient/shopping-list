var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

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
  gulp.watch('src/server/**/*.js', ['babel:server']);
});

/**
 * Watches the client source directory for changes and triggers
 * the webpack:client:build-dev task
 */
gulp.task('watch:client', function () {
  gulp.watch('src/client/**/*.js', ['webpack:client:build-dev']);
})

gulp.task('watch', ['watch:client', 'watch:server']);

var devConfig = Object.create(webpackConfig);
devConfig.devtool = 'inline-source-map';
devConfig.debug = true;

var devCompiler = webpack(devConfig);

/**
 * Runs webpack on the client side assets for development.
 */
gulp.task('webpack:client:build-dev', function (callback) {
  console.log('here');
  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:client:build', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

/**
 * The task that runs by default whenever another task isn't specified.
 */
gulp.task('default', ['watch:server', 'watch:client']);