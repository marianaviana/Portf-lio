import React, { useState } from 'react';
import { 
  Cloud, 
  Terminal, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Info, 
  Check, 
  Cpu,
  Workflow,
  Search
} from 'lucide-react';
import { Language, PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

interface SkillsProps {
  language: Language;
}

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    level: { pt: string; en: string };
    context: { pt: string; en: string };
    categoryTitle: { pt: string; en: string };
  } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="competencias" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Stack & Especialidades' : 'Technical Stack & Specializations'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Competências Técnicas' : 'Technical Skills'}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'Mapeamento de tecnologias, ferramentas e práticas aplicadas na rotina de engenharia e governança.'
              : 'Verifiable technical stack and operational practices applied in enterprise engineering environments.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-100 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            {language === 'pt' ? 'Todas as Categorias' : 'All Categories'}
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-slate-100 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {cat.title[language]}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors text-left"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {category.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {category.description[language]}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="mt-5 space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() => setActiveSkill({
                        name: skill.name,
                        level: skill.level,
                        context: skill.context,
                        categoryTitle: category.title
                      })}
                      className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/90 hover:border-slate-700 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-200 border border-slate-700 font-medium shrink-0">
                          {skill.level[language]}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                        {skill.context[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-300">
                <span>{category.skills.length} {language === 'pt' ? 'competências' : 'skills'}</span>
                <span className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer">
                  {language === 'pt' ? 'Ver contexto detalhado →' : 'View full context →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Detail Modal/Drawer */}
        {activeSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-lg w-full text-left shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {activeSkill.categoryTitle[language]}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {activeSkill.name}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {language === 'pt' ? 'Nível de Atuação Comprovado:' : 'Proven Working Level:'}
                  </p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">
                    {activeSkill.level[language]}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {language === 'pt' ? 'Contexto de Aplicação em Produção / Estudos:' : 'Context & Real Production / Lab Application:'}
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed mt-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
                    {activeSkill.context[language]}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
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
