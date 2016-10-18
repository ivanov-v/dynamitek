'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import mqpacker from 'css-mqpacker';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import plumber from 'gulp-plumber';
import server from 'browser-sync';
import paths from '../paths';

gulp.task('styles', () => {
  return gulp.src(paths.src.styles)
    .pipe(
      plumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit('end');
        }
      })
    )
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
    .pipe(gulp.dest(paths.build.styles))
    .pipe(server.stream());
});
