import React from 'react';
import { 
  Building2, 
  Award, 
  GraduationCap, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  CheckCircle,
  FileCheck2,
  GitBranch
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const { profile } = PORTFOLIO_DATA;

  const strategicPillars = [
    {
      icon: Layers,
      title: { pt: "Platform Engineering & IDP", en: "Platform Engineering & IDP" },
      description: {
        pt: "Criação de esteiras e padrões que reduzem o atrito no ciclo de desenvolvimento, permitindo que times entreguem com velocidade e segurança sem fricção operacional.",
        en: "Engineering standardized paths and internal developer platforms that eliminate friction, enabling delivery teams to deploy with velocity and security."
      }
    },
    {
      icon: GitBranch,
      title: { pt: "Automação & IaC Declarativo", en: "Automation & Declarative IaC" },
      description: {
        pt: "Infraestrutura como Código com Terraform e Ansible no Microsoft Azure, garantindo idempotência, rastreabilidade e eliminação de configurações manuais.",
        en: "Infrastructure as Code with Terraform and Ansible on Microsoft Azure, ensuring idempotency, full version control, and zero drift."
      }
    },
    {
      icon: ShieldCheck,
      title: { pt: "Confiabilidade & Observabilidade", en: "Reliability & Observability" },
      description: {
        pt: "Troubleshooting avançado conectando infraestrutura, aplicações e telemetria (Prometheus, Grafana, Azure Monitor), protegendo a estabilidade em grande escala.",
        en: "Advanced troubleshooting linking infrastructure, services, and distributed telemetry (Prometheus, Grafana, Azure Monitor) for high-availability enterprise workloads."
      }
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-slate-950/40 border-y border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Trajetória & Filosofia' : 'Career Trajectory & Philosophy'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt' 
              ? 'Conectando desenvolvimento de software, infraestrutura em nuvem e governança corporativa.' 
              : 'Bridging software engineering, resilient cloud infrastructure, and operational excellence.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed text-left">
            {profile.bio[language].map((paragraph, index) => (
              <p key={index} className="text-slate-200 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Philosophy callout */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mt-6 text-base sm:text-lg text-slate-200 leading-relaxed shadow-sm">
              <span className="text-cyan-400 font-bold block mb-1.5 text-sm uppercase tracking-wide">
                {language === 'pt' ? 'Filosofia de Engenharia:' : 'Engineering Philosophy:'}
              </span>
              <p className="text-slate-200 italic font-medium">
                {language === 'pt'
                  ? '“Plataforma não é apenas ferramenta, é produto interno. Meu foco é dar autonomia técnica ao desenvolvedor mantendo governança, segurança e estabilidade inegociáveis.”'
                  : '“A platform is not just tooling—it is an internal product. My focus is providing developer teams with self-service autonomy while upholding strict governance, security, and uptime.”'}
              </p>
            </div>
          </div>

          {/* Strategic Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {strategicPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {pillar.title[language]}
                      </h3>
                      <p className="mt-1.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                        {pillar.description[language]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Credentials Summary */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-sm sm:text-base space-y-3 text-slate-300 text-left">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">{language === 'pt' ? 'Atuação Recente:' : 'Recent Role:'}</span>
                <span className="text-white font-bold">Getronics (Banco do Brasil)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">{language === 'pt' ? 'Formação:' : 'Education:'}</span>
                <span className="text-slate-200 font-semibold">Pós em Cloud (UniCEUB)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">{language === 'pt' ? 'Certificação Oficial:' : 'Official Cert:'}</span>
                <span className="text-emerald-400 font-bold">Azure Fundamentals (AZ-900)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">{language === 'pt' ? 'Localização:' : 'Location:'}</span>
                <span className="text-slate-200">Brasília, DF (Remoto / Híbrido)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
