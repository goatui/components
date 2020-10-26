const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');

function clear(cb) {
  src('docs/assets/p4/**', { read: false })
    .pipe(clean());
  cb();
}

function copy(cb) {
  src('dist/**')
    .pipe(dest('docs/assets/p4/', {allowEmpty: true}));
  cb();
}

exports.copy = copy;
exports.clear = clear;
exports.default = series(clear, copy);
