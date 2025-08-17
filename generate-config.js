const fs = require('fs');
const path = require('path');

// Get credentials from environment variables or use defaults
const username = process.env.LOGIN_USERNAME || 'Dominik';
const password = process.env.LOGIN_PASSWORD || 'DomAmic2025';

// Generate config.js content
const configContent = `// Configuration file for login credentials
// Generated automatically during build
const CONFIG = {
    credentials: {
        username: '${username}',
        password: '${password}'
    }
};`;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Write config.js to dist directory
const configPath = path.join(distDir, 'config.js');
fs.writeFileSync(configPath, configContent);

console.log('✅ config.js generated successfully');
console.log(`Username: ${username}`);
console.log(`Password: ${'*'.repeat(password.length)}`);