const fs = require('fs');

function releaseToDocs(cb) {
  const packageJsonStr = fs.readFileSync('package.json');
  const packageJson = JSON.parse(packageJsonStr);

  fs.readFile('docs/_config.yml', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(new RegExp(/@goatui\/components@[0-9]+[.][0-9]+[.][0-9]+\/dist/, 'g'), `@goatui/components@${packageJson.version}/dist`);
    fs.writeFile('docs/_config.yml', result, 'utf8', function (err) {
      if (err) return console.log(err);
      cb('Docs config updated');
    });
  });
  fs.readFile('astro-docs/src/_data/site.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let result = JSON.parse(data);
    result.prod = {
      script: `https://cdn.jsdelivr.net/npm/@goatui/components@${packageJson.version}/dist/goatui/goatui.esm.js`,
      themeCss: `https://cdn.jsdelivr.net/npm/@goatui/components@${packageJson.version}/dist/goatui/assets/styles/theme.css`,
      version: packageJson.version,
    };
    result.dev.version = packageJson.version;
    fs.writeFile('astro-docs/src/_data/site.json', JSON.stringify(result, null, 2), 'utf8', function (err) {
      if (err) return console.log(err);
      cb('site.json config updated');
    });
  });
  fs.readFile('readme.md', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(new RegExp(/@goatui\/components@[0-9]+[.][0-9]+[.][0-9]+\/dist/, 'g'), `@goatui/components@${packageJson.version}/dist`);
    fs.writeFile('readme.md', result, 'utf8', function (err) {
      if (err) return console.log(err);
      cb('Readme.md updated');
    });
  });
}

releaseToDocs(function (text) {
  console.log(text);
});
