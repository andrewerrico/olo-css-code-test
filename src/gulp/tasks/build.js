var gulp = require('gulp');
var config = require('../config');

gulp.task('build', ['styles', 'fonts', 'html', 'images']);
