'use strict';

module.exports = function() {
    $.gulp.task('rigger', function() {
        return $.gulp.src('./source/**/*.html')
            .pipe($.gp.rigger())
            .pipe($.gulp.dest($.config.root));
    });
};
