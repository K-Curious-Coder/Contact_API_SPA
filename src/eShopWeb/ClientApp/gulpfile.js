
var devBuild = true; // true false

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ts = require("gulp-typescript");
var rename = require('gulp-rename');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var stripdebug = require('gulp-strip-debug');
var postcss = require('gulp-postcss');
var assets = require('postcss-assets');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var paths =
{
  DEST: 'src/assets/build/',
  DEST_SCRIPTS: 'src/assets/build/',
  DEST_ASSETS: 'src/assets/',

  JS_Stripe: 'Client_Assets/Stripe/js/**/*',
  JSIndex: ['Client_Assets/js/index.js'],

  JSBundleCheckout: ['Client_Assets/js/index.js', 'Client_Assets/js/formValidationCheckout.js'],
  JSBundleContact: ['Client_Assets/js/index.js', 'Client_Assets/js/formValidationContact.js'],

  js: 'js/',

  COPY_SRC_FOR_WWW_ROOT: 'src/assets/**/*',
  DEST_WWW_ROOT: '../wwwroot/assets/',

  scss: ['Client_Assets/scss/*.scss'],

  css: 'css/'
};

gulp.task('task-style-rules', function()
{
  return gulp.src(paths.scss)
  //.pipe(sass({ outputStyle: "compressed"}))
  .pipe(sass())
  .pipe(gulp.dest(paths.DEST + paths.css));
});

gulp.task('Task_Copy_To_WWW_Root', function()
{
  var out = paths.DEST_WWW_ROOT;
  return gulp.src(paths.COPY_SRC_FOR_WWW_ROOT).pipe(gulp.dest(out));
});

gulp.task('run', ['task-style-rules']);

gulp.task('watch', function()
{
  gulp.watch(paths.scss, ['task-style-rules']);
});

gulp.task('default', ['run', 'watch']);
