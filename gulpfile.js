const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const glob = require('glob');
const fs = require('fs');

function clear(cb) {
  src('docs/assets/p4/**', { read: false })
    .pipe(clean());
  cb();
}

function copy(cb) {
  src('dist/**')
    .pipe(dest('docs/assets/p4/', { allowEmpty: true }));
  cb();
}

function generateIconImportFile(cb) {
  const icons = [];
  glob.sync('node_modules/bootstrap-icons/icons/**.svg').forEach((file) => {
    //const data = readJsonFileSync(file, options);
    //result.push(data);
    icons.push(file.replace('node_modules/bootstrap-icons/icons/', '').replace('.svg', ''));
  });
  let result = '/*This is generated file */\n';
  icons.forEach((icon, index) => {
    result += 'import Icon' + index + ' from \'bootstrap-icons/icons/' + icon + '.svg\';\n';
  });
  result += '\n\nexport const ICONS = {};\n';
  icons.forEach((icon, index) => {
    result += 'ICONS[\'' + icon + '\'] = Icon' + index + ';\n';
  });
  fs.writeFileSync("src/components/p4-icon/bootstrap-icons.ts", result);
  cb();
}

exports.generateIconImportFile = generateIconImportFile;

exports.copy = copy;
exports.clear = clear;
exports.default = series(clear, copy);
