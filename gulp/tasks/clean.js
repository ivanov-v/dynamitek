'use strict';

import gulp from 'gulp';
import del from 'del';
import paths from '../paths';

gulp.task('clean', () => {
  return del(paths.baseBuild);
});
