const fs = require('fs');

// Create a new file called .env
fs.writeFileSync('.env', '');

// Add some environment variables to the file
fs.appendFileSync('.env', 'THIRD_PARTY_ASSETS=REMOTE\n');
