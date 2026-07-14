const fs = require('fs');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix nested a tags and invalid div inside a tag
    content = content.replace(/<a href="\/([^"]*)" class="text-logo" style="text-decoration: none;">SUBIX<\/a>/g, '<span class="text-logo">SUBIX</span>');
    content = content.replace(/<div class="text-logo" style="text-decoration:none;">SUBIX<\/div>/g, '<span class="text-logo">SUBIX</span>');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed HTML logo markup');
