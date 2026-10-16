import JSZip from 'jszip';

export async function generateProjectZip(): Promise<Blob> {
  const zip = new JSZip();

  // Root configuration files
  zip.file('package.json', JSON.stringify({
    name: "mariana-viana-portfolio",
    private: true,
    version: "1.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "vite build",
      preview: "vite preview",
      lint: "tsc --noEmit"
    },
    dependencies: {
      "lucide-react": "^0.546.0",
      "react": "^19.0.1",
      "react-dom": "^19.0.1",
      "vite": "^8.3.0",
      "jszip": "^3.10.1",
      "@tailwindcss/vite": "^4.3.3",
      "@vitejs/plugin-react": "^6.1.1"
    },
    devDependencies: {
      "@types/node": "^22.14.0",
      "@types/react": "^19.3.0",
      "@types/react-dom": "^19.3.0",
      "@types/jszip": "^3.4.1",
      "tailwindcss": "^4.3.3",
      "typescript": "^7.0.2"
    }
  }, null, 2));

  zip.file('tsconfig.json', JSON.stringify({
    compilerOptions: {
      target: "ES2022",
      useDefineForClassFields: true,
      lib: ["ES2022", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      allowImportingTsExtensions: true,
      isolatedModules: true,
      moduleDetection: "force",
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
      paths: {
        "@/*": ["./*"]
      }
    },
    include: ["src"]
  }, null, 2));

  zip.file('vite.config.ts', `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
`);

  zip.file('.gitignore', `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Node modules
node_modules
dist
dist-ssr
*.local

# Editor directories
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`);

  zip.file('README.md', `# Portfólio Profissional — Mariana Viana | Cloud & Platform Engineer

Cloud, DevOps, Platform Engineering (IDP) & Observability Portfolio.
Desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## Como Executar Localmente
1. \`npm install\`
2. \`npm run dev\`
3. Acesse \`http://localhost:3000\` ou \`http://localhost:5173\`

## Como Gerar Build
\`npm run build\`

## Como Publicar na Vercel ou Netlify
Suba para seu repositório no GitHub e importe na Vercel ou Netlify (Build: \`npm run build\`, Output: \`dist\`).
`);

  zip.file('index.html', `<!doctype html>
<html lang="pt-BR" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mariana Viana — Cloud & Platform Engineer | DevOps & Azure</title>
    <meta name="description" content="Portfólio profissional de Mariana Viana. Cloud & Platform Engineer com foco em Azure, Terraform, CI/CD e Observabilidade." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'/></svg>" />
  </head>
  <body class="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);

  return await zip.generateAsync({ type: 'blob' });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
