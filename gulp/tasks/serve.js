'use strict';

import gulp from 'gulp';
import server from 'browser-sync';
import watch from 'gulp-watch';
import paths from '../paths';

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
