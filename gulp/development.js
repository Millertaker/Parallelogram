
//////////////////////////////////////////////////////////////////////////////////////////////
// Required files
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');

var concat = require('gulp-concat');
var run = require('run-sequence');
var watch = require('gulp-watch');
var uglifycss = require('gulp-uglifycss');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var webpackConfigApp = require('./webpack.config.dev.js');

var webserver = require('gulp-webserver');

//////////////////////////////////////////////////////////////////////////////////////////////
// FE task
//////////////////////////////////////////////////////////////////////////////////////////////


gulp.task('devsrv-scripts', function() {
  return gulp.src('./public/devsrv/index.js')
    .pipe(webpack(webpackConfigApp))
    .pipe(gulp.dest('./devsrv/js'));
});

gulp.task('bundle-devsrv', function(){
  return run('devsrv-scripts');
})


gulp.task('less', function(){
  gulp.src('./src/less/**/*.less')
    .pipe(plumber())
    .pipe(concat('allmin.css'))
    .pipe(less())
    .pipe(gulp.dest('./devsrv/css'));
});

gulp.task('watch-fe', function(){
  gulp.watch('./src/js/**/*.js', ['bundle-devsrv']);
  gulp.watch('./src/devsrv/**/*.js', ['bundle-devsrv']);
  gulp.watch('./src/less/**/*.less', function(){
    gulp.start('less');
  });
});

gulp.task('webserver', function() {
  gulp.src('./devsrv/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('development', function(cb){
  run('watch-fe', 'less', 'bundle-devsrv', 'webserver', cb);
});