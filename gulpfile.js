const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('minify', (cb) =>{
  gulp.src(['./bst.js'])
    .pipe(minify({ ext: { min: '.min.js'}} ))
    .pipe(gulp.dest('./'));
  cb();
});

module.exports = gulp.series('minify');