const fs = require('fs');

const cssPath = 'style.css';
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('.text-logo')) {
    css += `
/* Text Logo */
.text-logo {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--lime);
  letter-spacing: -1px;
}
`;
    fs.writeFileSync(cssPath, css, 'utf8');
}

const contactPath = 'contact.html';
let contactHtml = fs.readFileSync(contactPath, 'utf8');

// Replace form opening tag
contactHtml = contactHtml.replace('<form id="auditForm">', '<form action="mailto:hello@subix.in" method="POST" enctype="text/plain">');

// Remove Supabase JS logic
const jsStart = contactHtml.indexOf('const form = document.getElementById(\'auditForm\');');
if (jsStart !== -1) {
    const jsEnd = contactHtml.indexOf('});', jsStart) + 3;
    const finalEnd = contactHtml.indexOf('});', jsEnd) + 3;
    // We can just regex replace the whole script block that contains auditForm
    contactHtml = contactHtml.replace(/<script>[\s\S]*const form = document\.getElementById\('auditForm'\);[\s\S]*<\/script>/, '');
}

fs.writeFileSync(contactPath, contactHtml, 'utf8');
console.log('Fixed contact and CSS');
