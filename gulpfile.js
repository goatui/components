const { src, dest, watch, series } = require('gulp');
const glob = require('glob');
const fs = require('fs');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const SRC = './src/styles/theme/theme.scss';
const DEST = './src/styles/';

function scssTask() {
  return src(SRC).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(dest(DEST));
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
  fs.writeFileSync('src/components/content/icon/bootstrap-icons.ts', result);
  cb();
}


function releaseToDocs(cb) {
  const packageJsonStr = fs.readFileSync('package.json');
  const packageJson = JSON.parse(packageJsonStr);

  fs.readFile('docs/_config.yml', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(new RegExp(/@goatui\/components@[0-9]+[.][0-9]+[.][0-9]+\/dist/, 'g'), `@goatui/components@${packageJson.version}/dist`);
    fs.writeFile('docs/_config.yml', result, 'utf8', function(err) {
      if (err) return console.log(err);
      cb();
    });
  });
  fs.readFile('readme.md', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(new RegExp(/@goatui\/components@[0-9]+[.][0-9]+[.][0-9]+\/dist/, 'g'), `@goatui/components@${packageJson.version}/dist`);
    fs.writeFile('readme.md', result, 'utf8', function(err) {
      if (err) return console.log(err);
      cb();
    });
  });
}

exports.themeBuild = scssTask;
exports.releaseToDocs = releaseToDocs;
exports.generateIconImportFile = generateIconImportFile;
exports.themeWatch = function () {
  watch(SRC, scssTask);
};

exports.default = series(releaseToDocs);
