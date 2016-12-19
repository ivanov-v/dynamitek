'use strict';

const gulp = require('gulp');

gulp.task('scripts-vendors', () => {
  gulp.src(['./src/scripts/plugins/*.js'])
  .pipe(gulp.dest('./build/js/plugins'));
});
