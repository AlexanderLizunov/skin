'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gp.watch('./source/css/**/*.scss', $.gulp.series('sass'));
    $.gp.watch('./source/**/*.html', $.gulp.series('rigger'));
    $.gp.watch('./source/img/**', $.gulp.series('copy:image'));
  });
};
