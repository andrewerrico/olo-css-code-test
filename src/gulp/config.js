var gulp = require('gulp');
var gutil = require('gulp-util');

var dest;
gutil.env.dev = true;

if ( gutil.env.prod === true ) {
  dest = 'dist';
} else {
  dest = 'dev';
}

module.exports = {
  paths: {
    dist: dest,
    styles: {
      all: 'src/assets/scss/**/*.scss',
      src: 'src/assets/scss/*.scss',
      dist: dest+'/style'
    },
    html: {
      src: './src/*.html',
      dist: './'+dest,
    },
    fonts: {
      src: './src/assets/fonts/**/*',
      dist: './'+dest+'/fonts',
    },
    imgs: {
      src: './src/assets/imgs/**/*',
      dist: './'+dest+'/imgs',
    },
  },
  names: {
    css: 'main.css',
  }
};
