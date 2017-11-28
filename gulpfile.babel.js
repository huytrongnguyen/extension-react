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
      TASK = {
        VENDOR: 'vendor',
        STYLE: 'style',
        SCRIPT: 'script'
      },
      DEPENDENCIES = [
        'babel-polyfill',
        'd3',
        'react',
        'react-dom',
      ];

gulp.task(TASK.VENDOR, () => {
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

gulp.task(TASK.STYLE, () => {
  return gulp.src(SRC + PATH.SCSS)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulp.dest(DIST + PATH.STYLE));
});

gulp.task(TASK.SCRIPT, () => {
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
    .pipe(source('app.js'))
    .pipe(gulp.dest(DIST + PATH.SCRIPT));
});

gulp.task('watch', [TASK.STYLE, TASK.SCRIPT], () => {
  // trigger for new or deleted files
  // 2 things to get this working:
  //  - Avoid ./ in the file/folder patterns
  //  - Ensure ./ in the value for cwd
  const watchOpt = { cwd: './' };
  gulp.watch(SRC + PATH.SCSS, watchOpt, [TASK.STYLE]);
  gulp.watch([
    'src/**/*.js', 'src/**/*.jsx', 
    `${SRC + PATH.SCRIPT}/**/*.js`, 
    `${SRC + PATH.SCRIPT}/**/*.jsx`
  ], watchOpt, [TASK.SCRIPT]);
});

gulp.task('default', [TASK.VENDOR, TASK.STYLE, TASK.SCRIPT]);