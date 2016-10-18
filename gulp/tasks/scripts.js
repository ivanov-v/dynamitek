'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../../webpack.config.babel.js';

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
