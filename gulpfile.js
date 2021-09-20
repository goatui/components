const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const glob = require('glob');
const fs = require('fs');

function clear(cb) {
  src('docs/assets/p4-ui/**', { read: false })
    .pipe(clean());
  cb();
}

function copy(cb) {
  src('dist/**')
    .pipe(dest('docs/assets/p4-ui/', { allowEmpty: true }));
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



function releaseToDocs(cb) {
  const packageJsonStr = fs.readFileSync('package.json');
  const packageJson = JSON.parse(packageJsonStr);

  fs.readFile('docs/_config.yml', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/script: '.*'/, `script: 'https://unpkg.com/@p4rm/ui@${packageJson.version}/dist/p4rm-ui/p4rm-ui.esm.js'`);
    result = data.replace(/theme: '.*'/, `theme: 'https://unpkg.com/@p4rm/ui@${packageJson.version}/dist/p4rm-ui/theme/theme.css'`);
    fs.writeFile('docs/_config.yml', result, 'utf8', function(err) {
      if (err) return console.log(err);
      cb();
    });
  });
}

exports.releaseToDocs = releaseToDocs;
exports.generateIconImportFile = generateIconImportFile;
exports.copy = copy;
exports.clear = clear;


exports.default = series(releaseToDocs);
