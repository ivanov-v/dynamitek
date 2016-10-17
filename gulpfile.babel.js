'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import run from 'run-sequence';

requireDir('./gulp/tasks');

gulp.task('build', (fn) => {
  run(
    'clean',
    'styles',
    'copy',
    'images',
    'symbols',
    fn
  );
});
