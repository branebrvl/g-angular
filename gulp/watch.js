'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'injector:css', 'injector:js'] ,function () {
  gulp.watch('app/less/**/*.less', ['injector:css']);
  gulp.watch('app/scripts/**/*.js', ['injector:js']);
  // gulp.watch('app/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
