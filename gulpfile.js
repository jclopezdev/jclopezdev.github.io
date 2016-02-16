var gulp = require('gulp');
var webserver = require("gulp-webserver");
var sass = require('gulp-sass');

// Config vars
var config = {
  styles: {
    main: 'static/sass/styles.scss',
    watch: 'static/sass/**/*.scss',
    output: 'static/css'
  },
  html: {
    watch: './*.html'
  },
  scripts: {
    main: 'static/js/app.js',
    watch: 'static/**/*.js',
    output: 'static/js'
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
   .pipe(sass({outputStyle: 'compressed'})) // compressed, expanded
   .pipe(gulp.dest(config.styles.output));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(config.styles.watch,   ['build:css']);    
  gulp.watch(config.html.watch,     ['build']);
});

// Build Task
gulp.task('build', ['build:css']);

// Default gulp task
gulp.task('default', ['server', 'watch', 'build']);