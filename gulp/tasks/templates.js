'use strict';

import gulp from 'gulp';
import pug from 'gulp-pug';
// import pugInheritance from 'gulp-pug-inheritance';
import plumber from 'gulp-plumber';
// import cache from 'gulp-cached';
import paths from '../paths';

gulp.task('templates', function buildHTML() {
  return gulp.src(paths.src.views)
    .pipe(plumber())
    // .pipe(pugInheritance({ basedir: 'dev/views' }))
    // .pipe(cache('build'))
    .pipe(pug({
        pretty: '  '
    }))
    .pipe(gulp.dest(paths.build.views));
});
