'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import mqpacker from 'css-mqpacker';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import paths from '../paths';

gulp.task('styles', () => {
  return gulp.src(paths.src.styles)
    .pipe(plumber({ errorHandler: notify.onError(function(error) {
      var line = error.message.match(/on line \d+/m) + ' of file ' + error.message.match(/[-._a-z\/\\]+\n/i);
      var message = error.message.match(/Error: .+\n/);
        return {
          title: 'Sass error ' + line,
          message: message
        }
      })
    }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 4 versions']
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(csso())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(paths.build.styles));
});
