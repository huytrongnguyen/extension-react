/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp';
import sass from 'gulp-sass';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const DOCS = 'docs/',
      SRC = DOCS + 'src/',
      DIST = DOCS + 'tmp/',
      PATH = {
        SCSS: 'css/**/*.scss',
        STYLE: 'css',
        SCRIPT: 'js',
        LIBS: {
          CSS: 'libs/css',
          JS: 'libs/js',
          FONT: 'libs/fonts',
        }
      },
      DEPENDENCIES = [
        'babel-polyfill',
        'd3',
        'react',
        'react-dom',
      ];

gulp.task('vendor', () => {
  gulp.src('./dist/rext.css')
    .pipe(gulp.dest(DIST + PATH.LIBS.CSS));

  gulp.src('./node_modules/font-awesome/css/**/*')
  .pipe(gulp.dest(DIST + PATH.LIBS.CSS));

  gulp.src('./node_modules/font-awesome/fonts/**/*')
    .pipe(gulp.dest(DIST + PATH.LIBS.FONT));

  process.env.NODE_ENV = 'production';
  const bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(lib => bundler.require(lib));
  return bundler.bundle()
                .pipe(source('vendor.min.js'))
                .pipe(streamify(uglify()))
                .pipe(gulp.dest(DIST + PATH.LIBS.JS));
});

gulp.task('default', () => {
  gulp.src(SRC + PATH.SCSS)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(DIST + PATH.STYLE));

  const bundler = bundler || browserify({
    entries: SRC + PATH.SCRIPT + '/app.js',
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    debug: true,
    cache: {},
    packageCache: {}
  });
  DEPENDENCIES.forEach(lib => bundler.external(lib));
  return bundler.bundle()
    .on('error', function(err) { console.error(err.toString()); this.emit('end'); })
    .pipe(source('app.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(DIST + PATH.SCRIPT));
});