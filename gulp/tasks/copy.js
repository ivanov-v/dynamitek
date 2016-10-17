'use strict';

import gulp from 'gulp';
import paths from '../paths';

gulp.task('copy', () => {
  return gulp.src([
      paths.src.fonts,
      paths.src.images,
      paths.src.media
    ], {
      base: paths.baseSrc
    })
    .pipe(gulp.dest(paths.baseBuild));
});
