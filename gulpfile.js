// Include Plug-ins
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('browserify');
var rename = require("gulp-rename");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var imageop = require('gulp-image-optimization');

// Config vars
var config = {
  styles: {
    main: 'static/sass/app.scss',
    watch: 'static/sass/**/*.scss',
    output: 'static/css'
  },
  html: {
    watch: './*.html'
  },
  scripts: {
    main: 'static/js/app.js',
    watch: 'static/js/assets/**/*.js',
    output: 'static/js'
  },
  images: {
    watch: ['static/images/**/*.png', 'images/**/*.jpg'],
    output: 'static/images'
  }
};

// Run local webserver
gulp.task('server', function(){
	gulp.src('./')
		.pipe(webserver({
			host             : '0.0.0.0',
			port             : 8080,
			livereload       : true
		}));
});

// Build css
gulp.task('build:css', function () {
 gulp.src(config.styles.watch)
   .pipe(sass({outputStyle: 'expanded'})) // compressed, expanded
   .pipe(gulp.dest(config.styles.output));
});

// Build Js
gulp.task('build:vendor', function() {
  gulp.src([
           'bower_components/jquery/dist/jquery.js',
           'static/js/vendor/jquery.backstretch.min.js',
           'static/js/vendor/jquery.sticky.js',
           'static/js/vendor/jquery.scrollto.min.js',
           'static/js/vendor/jquery.nav.js'
      ])
    .pipe(concat('vendor.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.output));
});

// Images Optimization
gulp.task('images', function() {
  gulp.src(config.images.watch)
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(config.images.output));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(config.styles.watch,   ['build:css']);  
  gulp.watch(config.images.watch,   ['image']);
  gulp.watch(config.html.watch,     ['build']);
});

// Build Task
gulp.task('build', ['build:css', 'build:vendor']);

// Default gulp task
gulp.task('default', ['server', 'watch', 'build']);