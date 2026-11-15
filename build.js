const fs = require('fs');
fs.mkdirSync('build', { recursive: true });
fs.writeFileSync('build/index.html', '<h1>Deployed by the Jenkins pipeline</h1>');
