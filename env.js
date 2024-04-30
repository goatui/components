const fs = require('fs');
const arguments = process.argv;

// Create a new file called .env
fs.writeFileSync('.env', '');

if (arguments[2] === 'LOCAL') {
  fs.appendFileSync('.env', 'THIRD_PARTY_ASSETS=LOCAL\n');
} else {
  fs.appendFileSync('.env', 'THIRD_PARTY_ASSETS=REMOTE\n');
}
