import React, { useState } from 'react';
import { 
  Download, 
  X, 
  Check, 
  Copy, 
  FolderArchive, 
  Terminal, 
  Rocket, 
  Github, 
  Globe, 
  Sparkles 
} from 'lucide-react';
import { Language } from '../data/portfolioData';
import { generateProjectZip, downloadBlob } from '../utils/zipGenerator';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleDownloadZip = async () => {
    try {
      setIsGenerating(true);
      // Try direct link download first
      const link = document.createElement('a');
      link.href = '/mariana-viana-cloud-portfolio.zip';
      link.download = 'mariana-viana-cloud-portfolio.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.warn('Direct download fallback to dynamic zip:', err);
      const zipBlob = await generateProjectZip();
      downloadBlob(zipBlob, 'mariana-viana-cloud-portfolio.zip');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } finally {
      setIsGenerating(false);
    }
  };

  const codeSnippets = [
    {
      title: { pt: '1. Executar Localmente', en: '1. Run Locally' },
      command: 'npm install\nnpm run dev'
    },
    {
      title: { pt: '2. Gerar Build de Produção', en: '2. Generate Production Build' },
      command: 'npm run build'
    },
    {
      title: { pt: '3. Enviar para o seu GitHub', en: '3. Push to your GitHub' },
      command: 'git init\ngit add .\ngit commit -m "feat: Mariana Viana Cloud & DevOps Portfolio"\ngit branch -M main\ngit remote add origin https://github.com/SEU-USUARIO/meu-portfolio.git\ngit push -u origin main'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FolderArchive className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              {language === 'pt' ? 'Exportar Projeto Completo (ZIP & Deploy)' : 'Export Complete Project (ZIP & Deploy)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Main Action: Download ZIP */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
              <Download className="w-5 h-5" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white">
                {language === 'pt' ? 'Baixar Código-Fonte Completo (.ZIP)' : 'Download Source Code (.ZIP Bundle)'}
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-1.5 leading-relaxed">
                {language === 'pt'
                  ? 'Arquivo pronto para descompactar, rodar localmente com npm install e publicar na Vercel, Netlify ou GitHub Pages.'
                  : 'Ready-to-use bundle containing all source files, configurations, README, and production setup.'}
              </p>
            </div>

            <button
              onClick={handleDownloadZip}
              disabled={isGenerating}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              <span>
                {isGenerating 
                  ? (language === 'pt' ? 'Gerando arquivo ZIP...' : 'Packaging ZIP...') 
                  : (language === 'pt' ? 'Baixar mariana-viana-portfolio.zip' : 'Download mariana-viana-portfolio.zip')}
              </span>
            </button>

            {downloadSuccess && (
              <p className="text-sm text-emerald-400 font-medium">
                ✓ {language === 'pt' ? 'Download iniciado com sucesso!' : 'Download started successfully!'}
              </p>
            )}
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">
              {language === 'pt' ? 'Instruções de Execução & Publicação' : 'Execution & Deployment Commands'}
            </h4>

            <div className="space-y-3">
              {codeSnippets.map((snippet, sIdx) => (
                <div key={sIdx} className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <div className="flex items-center justify-between pb-2 text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">{snippet.title[language]}</span>
                    <button
                      onClick={() => handleCopy(snippet.command, sIdx)}
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-xs sm:text-sm font-medium"
                    >
                      {copiedIndex === sIdx ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-sm font-mono text-cyan-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {snippet.command}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Hosting platforms guidance */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 space-y-2.5">
            <p className="font-bold text-white flex items-center gap-2 text-base">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span>{language === 'pt' ? 'Como publicar na Vercel ou Netlify em 1 minuto:' : 'Deploy to Vercel or Netlify in 1 minute:'}</span>
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-300 leading-relaxed">
              <li>{language === 'pt' ? 'Suba o código descompactado para seu repositório no GitHub.' : 'Push the unzipped codebase to your GitHub repository.'}</li>
              <li>{language === 'pt' ? 'Acesse vercel.com ou netlify.com e clique em "Import Git Repository".' : 'Open vercel.com or netlify.com and click "Import Git Repository".'}</li>
              <li>{language === 'pt' ? 'O build (npm run build) e a pasta (dist) são detectados automaticamente!' : 'The build command (npm run build) and output dir (dist) are auto-detected!'}</li>
              <li>{language === 'pt' ? 'Seu portfólio fica no ar com SSL gratuito e domínio personalizado opcional.' : 'Your portfolio goes live with free SSL and optional custom domain.'}</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
          >
            {language === 'pt' ? 'Concluir' : 'Done'}
          </button>
        </div>

      </div>

    </div>
  );
};
