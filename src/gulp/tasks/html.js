var gulp = require('gulp');
var config = require('../config');

// Copy Fonts
gulp.task('html', function() {
  return gulp.src(config.paths.html.src)
    .pipe(gulp.dest(config.paths.html.dist))
});
