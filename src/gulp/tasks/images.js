var gulp = require('gulp');
var config = require('../config');

// Copy Fonts
gulp.task('images', function() {
  return gulp.src(config.paths.imgs.src)
    .pipe(gulp.dest(config.paths.imgs.dist))
});
