'use strict';

import gulp from 'gulp';
import paths from '../paths';

gulp.task('copy', () => {
  return gulp.src([
      paths.src.fonts
    ], {
      base: paths.baseSrc
    })
    .pipe(gulp.dest(paths.baseBuild));
});
