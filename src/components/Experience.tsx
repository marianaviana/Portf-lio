import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experiencia" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Experiência & Atuação Corporativa' : 'Professional Experience & Impact'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Trajetória & Experiência' : 'Professional Timeline'}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'Atuação comprovada em infraestrutura, plataformas internas e sustentação de sistemas críticos em grande escala.'
              : 'Verifiable career progression in cloud infrastructure, internal platforms, and mission-critical enterprise systems.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-12 text-left">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div className={`absolute -left-[9px] top-2.5 w-4 h-4 rounded-full border-2 transition-colors ${
                exp.isCurrent
                  ? 'bg-cyan-400 border-cyan-100 ring-4 ring-cyan-500/25'
                  : 'bg-slate-900 border-slate-600'
              }`} />

              {/* Experience Card */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors">
                
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role[language]}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {language === 'pt' ? 'Atual' : 'Current'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3.5 mt-2 text-sm sm:text-base text-slate-200">
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      {exp.client && (
                        <span className="text-slate-200">
                          ({language === 'pt' ? 'Alocada no' : 'Client:'} <strong className="text-white font-semibold">{exp.client}</strong>)
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-800 w-fit shrink-0">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period[language]}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {exp.summary[language]}
                </p>

                {/* Bullet Points */}
                <div className="mt-5 space-y-3.5">
                  {exp.bulletPoints[language].map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 mr-2">
                    {language === 'pt' ? 'Tecnologias:' : 'Stack:'}
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs sm:text-sm bg-slate-950 text-slate-200 border border-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
