const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/<img src="\/Subix PNG\.png" alt="Subix" height="24" onerror="this\.src='https:\/\/placehold\.co\/100x30\/060606\/d4ff00\?text=SUBIX&font=Montserrat'">/g, '<div class="text-logo" style="text-decoration:none;">SUBIX</div>');
    content = content.replace(/<img src="\/Subix PNG\.png" alt="Subix" height="24" style="margin-bottom: 20px;" onerror="this\.src='https:\/\/placehold\.co\/100x30\/060606\/d4ff00\?text=SUBIX&font=Montserrat'">/g, '<div class="text-logo" style="margin-bottom: 20px;">SUBIX</div>');
    
    // Remove href="#" lines
    content = content.replace(/.*<a href="#">.*<\/a>.*\n/g, '');
    content = content.replace(/.*<a href="#" style="color: var\(--muted\); margin-left: 20px; text-decoration: none;">.*<\/a>.*\n/g, '');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('HTML files updated successfully');
