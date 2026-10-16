import React from 'react';
import { 
  Printer, 
  Download, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Globe 
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const { profile, experiences, skillsCategories, education, certifications, languages } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-semibold text-slate-200">
              {language === 'pt' ? 'Currículo Oficial — Mariana Viana' : 'Official Resume — Mariana Viana'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shadow-sm"
              title="Salvar como PDF ou Imprimir"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Imprimir / Salvar PDF' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-left print:bg-white print:text-gray-900 print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-gray-300 pb-5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
              MARIANA VIANA
            </h1>
            <p className="text-base sm:text-lg font-semibold text-cyan-400 print:text-blue-700 tracking-wider mt-1.5">
              DEVOPS | CLOUD | PLATFORM ENGINEERING
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-sm text-slate-300 print:text-gray-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 print:text-gray-700" />
                {profile.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400 print:text-gray-700" />
                {profile.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400 print:text-gray-700" />
                {profile.email}
              </span>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div className="mt-7">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800 print:border-gray-200 pb-1.5">
              {language === 'pt' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-200 print:text-gray-900 leading-relaxed font-normal">
              {language === 'pt'
                ? 'Profissional de TI focada em Cloud, DevOps e Platform Engineering (IDP) em ambientes corporativos de grande escala (Banco do Brasil). Sólida experiência com Microsoft Azure, IaC (Terraform, Ansible), CI/CD (GitHub Actions), orquestração (Docker, Kubernetes) e observabilidade. Pós-graduada em Computação em Nuvem e certificada AZ-900, atuando na conexão entre desenvolvimento, infraestrutura e operação para promover automação, eficiência e autonomia técnica.'
                : 'IT professional focused on Cloud, DevOps, and Platform Engineering (IDP) in large-scale enterprise environments (Banco do Brasil). Solid experience with Microsoft Azure, IaC (Terraform, Ansible), CI/CD (GitHub Actions), container orchestration (Docker, Kubernetes), and observability. Postgraduate in Cloud Computing and AZ-900 certified, working at the intersection of development, infrastructure, and operations to drive automation, reliability, and engineering autonomy.'}
            </p>
          </div>

          {/* Competências Técnicas */}
          <div className="mt-7">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800 print:border-gray-200 pb-1.5">
              {language === 'pt' ? 'COMPETÊNCIAS TÉCNICAS' : 'TECHNICAL COMPETENCIES'}
            </h2>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-200 print:text-gray-900 leading-relaxed">
              <li>
                <strong className="text-white print:text-black font-semibold">
                  {language === 'pt' ? 'Cloud & Infraestrutura:' : 'Cloud & Infrastructure:'}
                </strong>{' '}
                Microsoft Azure (VMs, Networking, Key Vault, SQL, Firewall, Policies), fundamentos de AWS/GCP e Arquitetura.
              </li>
              <li>
                <strong className="text-white print:text-black font-semibold">
                  {language === 'pt' ? 'DevOps & Automação:' : 'DevOps & Automation:'}
                </strong>{' '}
                IaC (Terraform, Ansible), CI/CD (GitHub Actions, Git), Docker, Kubernetes, DevSecOps.
              </li>
              <li>
                <strong className="text-white print:text-black font-semibold">
                  {language === 'pt' ? 'Platform Engineering & Observabilidade:' : 'Platform Engineering & Observability:'}
                </strong>{' '}
                Internal Developer Platform (IDP), Experiência do Desenvolvedor (DevEx), Grafana, Prometheus, Azure Monitor.
              </li>
              <li>
                <strong className="text-white print:text-black font-semibold">
                  {language === 'pt' ? 'Processos & Ferramentas:' : 'Processes & Tooling:'}
                </strong>{' '}
                ITSM, Scrum, Gestão de Incidentes, Power BI, Figma, VS Code.
              </li>
            </ul>
          </div>

          {/* Experiência Profissional */}
          <div className="mt-7">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800 print:border-gray-200 pb-1.5">
              {language === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'}
            </h2>

            <div className="mt-4 space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <strong className="text-white print:text-black text-base sm:text-lg font-bold">
                        {exp.role[language]}
                      </strong>
                      <span className="text-cyan-400 print:text-blue-700 font-semibold ml-2">
                        — {exp.company} {exp.client ? `(${exp.client})` : ''}
                      </span>
                    </div>
                    <span className="text-slate-300 print:text-gray-600 text-xs sm:text-sm font-medium">
                      {exp.period[language]} | {exp.location}
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-2 pl-4 list-disc text-slate-200 print:text-gray-900 leading-relaxed">
                    {exp.bulletPoints[language].map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formação Acadêmica & Certificações */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-slate-800 print:border-gray-200">
            <div>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800 print:border-gray-200 pb-1.5">
                {language === 'pt' ? 'FORMAÇÃO ACADÊMICA' : 'ACADEMIC EDUCATION'}
              </h2>
              <div className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-200 print:text-gray-900">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-white print:text-black">{edu.degree[language]}</p>
                    <p className="text-slate-300 print:text-gray-600 text-xs sm:text-sm">{edu.institution} — {edu.status[language]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800 print:border-gray-200 pb-1.5">
                {language === 'pt' ? 'CERTIFICAÇÕES E IDIOMAS' : 'CERTIFICATIONS & LANGUAGES'}
              </h2>
              <div className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-200 print:text-gray-900">
                <div>
                  <p className="font-bold text-white print:text-black">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
                  <p className="text-slate-300 print:text-gray-600 text-xs sm:text-sm">AWS Educate: Introduction to Cloud 101</p>
                </div>
                <div className="pt-1.5">
                  <strong className="text-white print:text-black font-semibold">
                    {language === 'pt' ? 'Idiomas:' : 'Languages:'}
                  </strong>{' '}
                  <span className="text-slate-200 print:text-gray-900">
                    {language === 'pt' ? 'Português (Nativo) | Inglês (Intermediário/Técnico)' : 'Portuguese (Native) | English (Intermediate/Technical)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="no-print p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{language === 'pt' ? 'Dica: utilize "Salvar como PDF" no diálogo de impressão.' : 'Tip: Select "Save as PDF" in your print dialog.'}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>

      </div>

    </div>
  );
};

