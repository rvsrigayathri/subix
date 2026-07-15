const fs = require('fs');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text logo with image logo
    content = content.replace(/<span class="text-logo">SUBIX<\/span>/g, '<img src="/assets/logo.png" alt="SUBIX Logo" height="40">');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced text logo with image logo in all HTML files');
