'use strict';

module.exports = function() {
    $.gulp.task('cssunit', function() {
        return $.gulp.src( './source/css/')
            .pipe($.gp.cssunit({
                type: 'px-to-rem',
                rootSize:16,
            }))
            .pipe($.config.root + '/css');
    })
};