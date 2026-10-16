import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Menu, 
  X, 
  Globe, 
  FileText, 
  Download, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenResume: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenResume,
  onOpenExport,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: { pt: 'Sobre', en: 'About' } },
    { href: '#competencias', label: { pt: 'Competências', en: 'Skills' } },
    { href: '#projetos', label: { pt: 'Projetos', en: 'Projects' } },
    { href: '#experiencia', label: { pt: 'Experiência', en: 'Experience' } },
    { href: '#formacao', label: { pt: 'Formação', en: 'Education' } },
    { href: '#contato', label: { pt: 'Contato', en: 'Contact' } },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-800 shadow-md shadow-black/30' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/80 transition-colors">
              <Cloud className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Mariana Viana
              </span>
              <span className="hidden sm:inline-block text-xs font-normal text-slate-400">
                / Cloud & DevOps
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[0.92rem] font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  language === 'pt'
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Português"
              >
                PT
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Currículo' : 'Resume'}</span>
            </button>

            {/* Export Project Button */}
            <button
              onClick={onOpenExport}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900/70 border border-cyan-800/80 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Exportar ZIP' : 'Export ZIP'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded p-0.5 text-xs font-medium">
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2 py-0.5 rounded text-xs ${
                  language === 'pt' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-xs ${
                  language === 'en' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 bg-slate-900/60 hover:bg-slate-850 rounded-md border border-slate-800 flex items-center justify-between"
              >
                <span>{link.label[language]}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-700"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>{language === 'pt' ? 'Ver / Imprimir Currículo' : 'View / Print Resume'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExport();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/60 rounded-lg border border-cyan-800"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Baixar Código do Portfólio (ZIP)' : 'Download Portfolio Code (ZIP)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
