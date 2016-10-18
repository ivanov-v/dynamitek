'use strict';

import gulp from 'gulp';
import run from 'run-sequence';

gulp.task('build', (fn) => {
  run(
    'clean',
    'styles',
    'images',
    'media',
    'fonts',
    'symbols',
    'templates',
    'scripts',
    fn
  );
});
