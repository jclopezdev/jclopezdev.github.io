var gulp = require('gulp');
var webserver = require("gulp-webserver");

// Run local webserver
gulp.task('server', function(){
	gulp.src('./')
		.pipe(webserver({      
			host             : '0.0.0.0',
			port             : 8080,
			livereload       : true      
		}));
});

// Default gulp task
gulp.task('default', ['server']);