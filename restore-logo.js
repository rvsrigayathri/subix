const fs = require('fs');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text logo with image logo
    content = content.replace(/<img src="\/assets\/logo\.png" alt="SUBIX Logo" height="40">/g, '<img src="/Subix PNG.png" alt="Subix" height="24">');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Restored original image logo');
