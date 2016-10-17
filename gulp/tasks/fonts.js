'use strict';

import gulp from 'gulp';
import paths from '../paths';

gulp.task('fonts', () => {
  return gulp.src([
      paths.src.fonts
    ], {
      base: paths.baseSrc
    })
    .pipe(gulp.dest(paths.baseBuild));
});
