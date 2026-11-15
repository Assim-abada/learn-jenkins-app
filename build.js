const fs = require('fs');
fs.mkdirSync('build', { recursive: true });
fs.writeFileSync('build/index.html', '<h1>Hello from Jenkins CI/CD</h1>');