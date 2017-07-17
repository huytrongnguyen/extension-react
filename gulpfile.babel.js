/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

/*========== REQUIRED LIBS ==========*/
import gulp from 'gulp';
import sass from 'gulp-sass';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import watchify from 'watchify';

/*========== PATH ==========*/
const DOCS = 'docs',
      PATH = {
        REXT_CSS: 'css/rext.scss',
        CSS: 'css/**/*.scss',
        SRC: 'src',
        STYLE: DOCS + '/src/css/**/*.scss',
        STYLE_DIST: DOCS + '/dist/css',
        FONT_DIST: DOCS + '/dist/fonts',
        SCRIPT: DOCS + '/src/js',
        SCRIPT_DIST: DOCS + '/dist/js'
      },

      /*========== TASK ==========*/
      DEPENDENCIES = [
        'babel-polyfill',
        'd3',
        'react',
        'react-dom'
      ],

      /*========== TASK ==========*/
      TASK = {
        COPY: 'copy',
        REXT_STYLE: 'rext_style',
        DOCS_STYLE: 'docs_style',
        FRAMEWORK: 'framework',
        SCRIPT: 'script'
      };

gulp.task(TASK.COPY, () => {
  gulp.src('./src/*.css').pipe(gulp.dest(PATH.STYLE_DIST));
  gulp.src('./node_modules/font-awesome/css/**/*').pipe(gulp.dest(PATH.STYLE_DIST));
  gulp.src('./node_modules/font-awesome/fonts/**/*').pipe(gulp.dest(PATH.FONT_DIST));
});

gulp.task(TASK.REXT_STYLE, () => {
  return gulp.src(PATH.REXT_CSS)
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(gulp.dest(PATH.SRC))
    .pipe(gulp.dest(PATH.STYLE_DIST));
});

gulp.task(TASK.DOCS_STYLE, () => {
  return gulp.src(PATH.STYLE)
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(gulp.dest(PATH.STYLE_DIST));
});

gulp.task(TASK.FRAMEWORK, () => {
  process.env.NODE_ENV = 'production';
  const bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(lib => bundler.require(lib));
  return bundler.bundle()
    .pipe(source('framework.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(PATH.SCRIPT_DIST));
});

gulp.task(TASK.SCRIPT, () => {
  const bundler = bundler || watchify(browserify({
    entries: PATH.SCRIPT + '/app.js',
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    debug: true,
    cache: {},
    packageCache: {}
  }));
  DEPENDENCIES.forEach(lib => bundler.external(lib));
  return bundler.bundle()
    .on('error', function(err) { console.error(err.toString()); this.emit('end'); })
    .pipe(source('app.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(PATH.SCRIPT_DIST));
});

gulp.task('default', [TASK.REXT_STYLE, TASK.DOCS_STYLE, TASK.SCRIPT], () => {
  // trigger for new or deleted files
  // 2 things to get this working:
  //  - Avoid ./ in the file/folder patterns
  //  - Ensure ./ in the value for cwd
  const watchOpt = { cwd: './' };
  gulp.watch(PATH.CSS, watchOpt, [TASK.REXT_STYLE]);
  gulp.watch(PATH.STYLE, watchOpt, [TASK.DOCS_STYLE]);
  gulp.watch([`${PATH.SCRIPT}/**/*.js`, `${PATH.SCRIPT}/**/*.jsx`], watchOpt, [TASK.SCRIPT]);
});