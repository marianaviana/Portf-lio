import React, { useState } from 'react';
import { 
  Layers, 
  Workflow, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Server,
  Code2,
  Clock,
  Sparkles
} from 'lucide-react';
import { Language, PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'platform' | 'iac' | 'cicd' | 'observability' | 'roadmap'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const getBadgeStyle = (type: 'production' | 'lab' | 'roadmap') => {
    switch (type) {
      case 'production':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
      case 'lab':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-800/80';
      case 'roadmap':
        return 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80';
    }
  };

  return (
    <section id="projetos" className="py-20 sm:py-28 bg-slate-950/40 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Projetos & Arquitetura' : 'Featured Projects & Labs'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'Casos reais de produção corporativa, laboratórios de infraestrutura como código e pipelines automatizadas com diagramas técnicos.'
              : 'Real enterprise production cases, infrastructure as code labs, and automated CI/CD pipelines with technical diagrams.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {[
            { id: 'all', label: { pt: 'Todos os Projetos', en: 'All Projects' } },
            { id: 'platform', label: { pt: 'Platform & IDP', en: 'Platform & IDP' } },
            { id: 'iac', label: { pt: 'Azure & IaC', en: 'Azure & IaC' } },
            { id: 'cicd', label: { pt: 'CI/CD & Containers', en: 'CI/CD & Containers' } },
            { id: 'observability', label: { pt: 'Observabilidade & SRE', en: 'Observability & SRE' } },
            { id: 'roadmap', label: { pt: 'Roadmap & Estudos', en: 'Roadmap & Studies' } },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
                filter === cat.id
                  ? 'bg-slate-100 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Badge Indicator */}
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getBadgeStyle(project.badgeType)}`}>
                    <span className="w-2 h-2 rounded-full bg-current" />
                    <span>{project.badge[language]}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase font-medium">
                    {project.id}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                  {project.title[language]}
                </h3>

                <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {project.shortDescription[language]}
                </p>

                {/* Problem & Contribution Highlights */}
                <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-cyan-400 block mb-1 uppercase tracking-wide">
                      {language === 'pt' ? 'Problema Resolvido:' : 'Problem Solved:'}
                    </span>
                    <span className="text-sm sm:text-base text-slate-200 leading-relaxed block">{project.problemSolved[language]}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-900">
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 block mb-1 uppercase tracking-wide">
                      {language === 'pt' ? 'Minha Atuação:' : 'My Role:'}
                    </span>
                    <span className="text-sm sm:text-base text-slate-200 leading-relaxed block">{project.myContribution[language]}</span>
                  </div>
                </div>

                {/* Architecture Visual Flow Preview */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-cyan-400" />
                    <span>{language === 'pt' ? 'Fluxo de Arquitetura & Automação:' : 'Architecture & Pipeline Flow:'}</span>
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {project.diagram.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-slate-400 font-mono text-xs font-semibold">{st.step}</span>
                          <p className="font-semibold text-slate-100 text-xs sm:text-sm mt-1 line-clamp-1">{st.label[language]}</p>
                        </div>
                        <span className="text-cyan-400 text-xs font-mono font-medium mt-2 line-clamp-1">
                          {st.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs sm:text-sm bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'pt' ? 'Ver Análise Completa & Decisões' : 'View Full Blueprint & Decisions'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repo</span>
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm text-slate-400 font-mono">
                    {language === 'pt' ? 'Configurável via GitHub' : 'Configurable via GitHub'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detailed Blueprint Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-3xl w-full text-left shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${getBadgeStyle(selectedProject.badgeType)} mb-2`}>
                    {selectedProject.badge[language]}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title[language]}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 text-xs rounded-lg bg-slate-800 text-slate-300 hover:text-white shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="mt-6 space-y-6 text-sm sm:text-base text-slate-200">
                
                {/* Problem & Architecture */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {language === 'pt' ? 'Visão Geral & Problema Resolvido' : 'Overview & Problem Solved'}
                  </h4>
                  <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                    {selectedProject.problemSolved[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {language === 'pt' ? 'Contexto de Arquitetura & Engenharia' : 'Architecture & Engineering Context'}
                  </h4>
                  <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                    {selectedProject.architecture[language]}
                  </p>
                </div>

                {/* Visual Architecture Steps */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-cyan-400" />
                    <span>{language === 'pt' ? 'Etapas Técnicas da Pipeline & Topologia' : 'Architecture & Automation Pipeline'}</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.diagram.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5"
                      >
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800 shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-semibold text-white text-sm sm:text-base">{step.label[language]}</span>
                            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                              {step.tech}
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                            {step.desc[language]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Technical Decisions */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
                    {language === 'pt' ? 'Principais Decisões Técnicas' : 'Key Technical Decisions'}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.technicalDecisions[language].map((dec, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results & Key Learnings */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
                    {language === 'pt' ? 'Resultados & Impacto' : 'Key Results & Impact'}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.metricsOrLearnings[language].map((met, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{met}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-sm font-semibold rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shrink-0 shadow-sm"
                >
                  {language === 'pt' ? 'Fechar' : 'Close'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
