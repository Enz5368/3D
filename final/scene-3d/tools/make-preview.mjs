// Génère preview.html (auto-contenu, ouvrable en file://) à partir de src/ — ne pas éditer preview.html
import fs from 'fs';
const files = ['src/scene.js','src/objects.js','src/camera-path.js','src/hotspots.js','src/main.js'].filter(f=>fs.existsSync(f)).map(f=>fs.readFileSync(f,'utf8'));
const cdnImports = new Set();
const bodies = files.map(code => code.split('\n').filter(l=>{
  const t = l.trim();
  if (/^import\s/.test(t)) {
    if (/from\s+['"]\.\.?\//.test(t)) return false;   // import local -> supprimé
    cdnImports.add(t); return false;                    // import CDN -> hissé en tête
  }
  return true;
}).map(l=>l.replace(/^export (const|function|default )?/, m=>m.replace('export ',''))).join('\n'));
const moduleCode = [...cdnImports].join('\n') + '\n\n' + bodies.join('\n\n// ————————————\n\n');
let html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('style.css','utf8');
html = html.replace(/<link rel="stylesheet" href="style.css">/, '<style>\n'+css+'\n</style>');
html = html.replace(/<script type="module" src="src\/main.js"><\/script>/, '<script type="module">\n'+moduleCode+'\n</scr'+'ipt>');
html = html.replace('<title>OrellanaTech — Scène 3D</title>','<title>PREVIEW (généré) — Scène 3D</title>');
fs.writeFileSync('preview.html', html);
console.log('preview.html régénéré:', fs.statSync('preview.html').size, 'octets');
