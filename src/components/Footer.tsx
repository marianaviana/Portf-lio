import React from 'react';
import { Cloud, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900 text-left">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <Cloud className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-white">
                Mariana Viana <span className="text-slate-400 font-normal">/ Cloud & Platform</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {language === 'pt'
                ? 'Engenheira de Cloud, DevOps e Platform Engineering com experiência em Microsoft Azure, Terraform, Ansible, CI/CD e Observabilidade em ambientes corporativos de grande porte.'
                : 'Cloud, DevOps, and Platform Engineer specializing in Microsoft Azure, Terraform, Ansible, CI/CD, and Observability for enterprise scale environments.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-3.5 uppercase tracking-wider text-xs">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                </a>
              </li>
              <li>
                <a href="#competencias" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {language === 'pt' ? 'Competências Técnicas' : 'Technical Skills'}
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {language === 'pt' ? 'Experiência Profissional' : 'Experience Timeline'}
                </a>
              </li>
              <li>
                <a href="#formacao" className="text-slate-300 hover:text-white transition-colors text-sm">
                  {language === 'pt' ? 'Formação & Certificações' : 'Education & Credentials'}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white font-semibold mb-3.5 uppercase tracking-wider text-xs">
              {language === 'pt' ? 'Conectar' : 'Connect'}
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Mariana Viana. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-xs sm:text-sm">
              React + TypeScript + Tailwind CSS + Vite
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
