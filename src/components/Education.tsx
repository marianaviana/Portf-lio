import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface EducationProps {
  language: Language;
}

export const Education: React.FC<EducationProps> = ({ language }) => {
  const { education, certifications, languages } = PORTFOLIO_DATA;

  return (
    <section id="formacao" className="py-20 sm:py-24 bg-slate-950/40 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Formação & Credenciais Oficiais' : 'Education & Verified Credentials'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Formação Acadêmica & Certificações' : 'Education & Credentials'}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'Pós-graduação em Cloud Computing, graduação superior em Gestão de TI e certificações reconhecidas.'
              : 'Postgraduate specialization in Cloud Computing, IT Management degree, and verified industry credentials.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Academic Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{language === 'pt' ? 'Formação Acadêmica' : 'Academic Education'}</span>
            </h3>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-medium">
                        {item.status[language]}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white mt-2.5">
                        {item.degree[language]}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-400 mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {item.description && (
                    <p className="mt-3.5 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-slate-800/80 pt-3.5">
                      {item.description[language]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Official Certifications & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Certifications Block */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>{language === 'pt' ? 'Certificações & Credenciais' : 'Official Credentials'}</span>
              </h3>

              <div className="space-y-3.5">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <h4 className="text-base font-bold text-white leading-snug">
                            {cert.name}
                          </h4>
                          <p className="text-xs sm:text-sm font-medium text-cyan-400 mt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-slate-950 text-emerald-300 border border-emerald-900/60 shrink-0 font-medium">
                        {cert.status[language]}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                      {cert.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Idiomas & Comunicação' : 'Languages & Communication'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white">
                        {lang.name[language]}
                      </span>
                      <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-slate-950 text-cyan-300 border border-cyan-900/60 font-medium">
                        {lang.level[language]}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {lang.note[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
