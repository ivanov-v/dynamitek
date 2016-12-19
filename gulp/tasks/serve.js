'use strict';

const gulp = require('gulp');
const server = require('browser-sync');
const watch = require('gulp-watch');
const paths = require('../paths');

gulp.task('serve', () => {
  server.init({
    server: paths.baseBuild
  });

  server.watch([
    './build/**/*.html'
  ])
  .on('change', server.reload);

  watch(['./src/**/*.scss'], () => {
    gulp.start('styles');
  });

  watch([paths.src.fonts], () => {
    gulp.start('fonts');
  });

  watch([paths.src.images], () => {
    gulp.start('images');
  });

  watch([paths.src.media], () => {
    gulp.start('media');
  });

  watch(['./src/**/*.pug'], () => {
    gulp.start('templates');
  });

  watch(['./src/sprite/symbols/*.svg'], () => {
    gulp.start('symbols');
  });

  watch(['./src/scripts/vendors/*.js'], () => {
    gulp.start('scripts-vendors');
  });
});
