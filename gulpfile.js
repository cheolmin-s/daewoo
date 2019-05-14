/**
 * Created by Administrator on 2017-07-03.
 */

// 변수선언 = require('모듈이름');
var gulp = require('gulp');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/*
 gulp.task( task이름, 함수/익명함수 );
 */

// pipe()는 모듈의 기능을 실행해주는 함수

gulp.task('watch', function() {
  gulp.watch('src/html/**', ['include']);
  gulp.watch('src/scss/**', ['sass']);
  gulp.watch('src/js/**', ['jsconcat']);
});

// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("src/html/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("dist/html"));
});


// sass, autoprefixer 실행

gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/css'));
});

// concat 실행 - 여러 개의 파일을 하나의 파일로 합치는 기능
gulp.task('concat', function() {
  return gulp.src(['src/js/daewoo.js','src/js/*.js'])
      .pipe(sourcemaps.init())
      .pipe(concat('commons.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'));
});


gulp.task('jsconcat', ['concat']);

gulp.task('default', ['include','sass','jsconcat','watch']);