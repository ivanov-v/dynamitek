'use strict';

const gulp = require('gulp');
const paths = require('../paths');

gulp.task('fonts', () => {
  return gulp.src([
      paths.src.fonts
    ], {
      base: paths.baseSrc
    })
    .pipe(gulp.dest(paths.baseBuild));
});
