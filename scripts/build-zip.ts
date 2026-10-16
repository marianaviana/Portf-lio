import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function bundle() {
  const zip = new JSZip();

  function addDir(dirPath: string, zipFolder: JSZip) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git' || entry.name === 'public') {
        continue;
      }
      if (entry.isDirectory()) {
        const sub = zipFolder.folder(entry.name);
        if (sub) addDir(fullPath, sub);
      } else {
        const content = fs.readFileSync(fullPath);
        zipFolder.file(entry.name, content);
      }
    }
  }

  addDir('.', zip);

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  const content = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync('public/mariana-viana-cloud-portfolio.zip', content);
  console.log('ZIP successfully generated at public/mariana-viana-cloud-portfolio.zip! Size:', (content.length / 1024).toFixed(1), 'KB');
}

bundle().catch(console.error);
