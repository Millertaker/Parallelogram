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

gulp.task('clean', function(cb){
  rimraf('./build', cb);
});

gulp.task('traspile-prod-scripts', function() {
  return gulp.src('./public/src/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('less', function(){
  gulp.src('./src/less/**/*.less')
    .pipe(plumber())
    .pipe(concat('allmin.css'))
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
    .pipe(gulp.dest('./devsrv/css'));
});

gulp.task('production', function(cb){
  run('watch-fe', 'clean', 'less', 'traspile-prod-scripts', cb);
});