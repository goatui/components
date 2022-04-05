const { src, dest, watch, series } = require('gulp');
const fs = require('fs');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const SRC = './src/styles/theme/theme.scss';
const DEST = './src/styles/';

function scssTask() {
  return src(SRC).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(dest(DEST));
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
exports.themeWatch = function() {
  watch(SRC, scssTask);
};

exports.default = series(releaseToDocs);
