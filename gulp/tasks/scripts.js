'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('../../webpack.config.js');

gulp.task('scripts', function() {
  webpackConfig.watch = false;
  return gulp.src('./src/scripts/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'));
});

gulp.task('scripts-watch', function() {
  webpackConfig.watch = true;
  return gulp.src('./src/scripts/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'));
});
