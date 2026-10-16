import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Server, 
  Activity, 
  Play, 
  RotateCcw,
  ShieldCheck,
  Download
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  language: Language;
  onOpenResume: () => void;
  onOpenExport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenResume, onOpenExport }) => {
  const { profile } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'pipeline' | 'iac' | 'observability'>('pipeline');
  const [pipelineProgress, setPipelineProgress] = useState(3); // 0 to 4
  const [isRunning, setIsRunning] = useState(false);

  // Simulation pipeline steps
  const pipelineSteps = [
    { name: 'Git Commit', tool: 'GitHub', time: '0.4s', status: 'success' },
    { name: 'DevSecOps & Lint', tool: 'Actions', time: '1.2s', status: 'success' },
    { name: 'Terraform Plan', tool: 'Azure IaC', time: '2.1s', status: 'success' },
    { name: 'Rolling Deploy', tool: 'Kubernetes', time: '1.8s', status: 'success' },
    { name: 'SLO Verify', tool: 'Grafana', time: '0.5s', status: 'success' }
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setPipelineProgress(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setPipelineProgress(current);
      if (current >= 4) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 600);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-700/60 text-sm font-medium text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{profile.statusBadge[language]}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-medium text-cyan-400 tracking-tight">
                {profile.headline[language]}
              </p>
            </div>

            {/* Strategic Tagline */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              {profile.tagline[language]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm active:scale-98"
              >
                <span>{language === 'pt' ? 'Ver Projetos & Arquitetura' : 'Explore Projects & Architecture'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-base font-medium text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors active:scale-98 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Visualizar Currículo (PDF)' : 'View Resume (PDF)'}</span>
              </button>

              <button
                onClick={onOpenExport}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-base font-medium text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/70 transition-colors shadow-sm"
                title={language === 'pt' ? 'Baixar pacote completo do portfólio' : 'Download complete portfolio bundle'}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{language === 'pt' ? 'Código ZIP' : 'ZIP Bundle'}</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm sm:text-base text-slate-200 border-t border-slate-800/80">
              <span className="text-slate-400 font-semibold">{language === 'pt' ? 'Contato:' : 'Contact:'}</span>
              
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-cyan-300 text-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`https://wa.me/${profile.cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-300 text-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-300 text-slate-200 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Highlights Mini Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {profile.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left"
                >
                  <p className="text-base sm:text-lg font-bold text-cyan-400 tracking-tight">{item.value}</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                    {item.label[language]}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean DevOps & IDP Architecture Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-200 ml-2">
                    Console IDP · Cluster Azure
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-300 tracking-wide">ONLINE</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs sm:text-sm">
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`flex-1 py-3 px-3 text-center border-b-2 font-semibold transition-colors ${
                    activeTab === 'pipeline'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-900/70'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CI/CD Pipeline
                </button>
                <button
                  onClick={() => setActiveTab('iac')}
                  className={`flex-1 py-3 px-3 text-center border-b-2 font-semibold transition-colors ${
                    activeTab === 'iac'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-900/70'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Azure IaC (Terraform)
                </button>
                <button
                  onClick={() => setActiveTab('observability')}
                  className={`flex-1 py-3 px-3 text-center border-b-2 font-semibold transition-colors ${
                    activeTab === 'observability'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-900/70'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Observability
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-6 text-left">
                {activeTab === 'pipeline' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-slate-400 pb-3 border-b border-slate-800/80">
                      <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        IDP Pipeline Automation
                      </span>
                      <button
                        onClick={handleRunSimulation}
                        disabled={isRunning}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-50 text-xs font-semibold transition-colors"
                      >
                        {isRunning ? (
                          <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        )}
                        <span>{isRunning ? 'Running...' : 'Re-Run'}</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {pipelineSteps.map((step, idx) => {
                        const isDone = idx <= pipelineProgress;
                        const isCurrent = idx === pipelineProgress && isRunning;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border transition-colors flex items-center justify-between ${
                              isDone
                                ? 'bg-slate-950/80 border-slate-800'
                                : 'bg-slate-950/30 border-slate-900 text-slate-600'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {isCurrent ? (
                                <RotateCcw className="w-4 h-4 text-cyan-400 animate-spin" />
                              ) : isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-700" />
                              )}
                              <div className="flex items-center gap-2.5">
                                <span className={`text-sm ${isDone ? 'text-slate-100 font-medium' : 'text-slate-500'}`}>
                                  {step.name}
                                </span>
                                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 font-semibold">
                                  {step.tool}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-mono text-slate-400 font-medium">{step.time}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs sm:text-sm text-emerald-300 flex items-center justify-between font-medium">
                      <span>✓ Status: Production Artifact Deployed</span>
                      <span className="font-bold font-mono">SLO: 99.98%</span>
                    </div>
                  </div>
                )}

                {activeTab === 'iac' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 leading-relaxed font-mono text-xs sm:text-sm">
                      <span className="text-cyan-400">resource</span> <span className="text-emerald-400">"azurerm_kubernetes_cluster"</span> <span className="text-slate-200">"idp_aks"</span> &#123;<br />
                      &nbsp;&nbsp;name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-amber-300">"aks-bb-production-01"</span><br />
                      &nbsp;&nbsp;location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-amber-300">"brazilsouth"</span><br />
                      &nbsp;&nbsp;dns_prefix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-amber-300">"idp-services"</span><br />
                      &nbsp;&nbsp;private_cluster_enabled = <span className="text-cyan-300">true</span><br />
                      &nbsp;&nbsp;network_profile &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;network_plugin = <span className="text-amber-300">"azure"</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;network_policy = <span className="text-amber-300">"azure"</span><br />
                      &nbsp;&nbsp;&#125;<br />
                      &#125;
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Terraform State: Locked in Azure Blob, Key Vault integrated, zero drift.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'observability' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <p className="text-sm text-slate-300 font-medium">Error Rate (5xx)</p>
                        <p className="text-2xl font-bold text-emerald-400 mt-1 font-mono tabular-nums">0.002%</p>
                        <p className="text-xs text-slate-400 mt-1">Target: &lt; 0.05%</p>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <p className="text-sm text-slate-300 font-medium">P99 Latency</p>
                        <p className="text-2xl font-bold text-cyan-400 mt-1 font-mono tabular-nums">42 ms</p>
                        <p className="text-xs text-slate-400 mt-1">Global median</p>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <p className="text-sm text-slate-300 font-medium">Node Availability</p>
                        <p className="text-2xl font-bold text-emerald-400 mt-1 font-mono tabular-nums">100%</p>
                        <p className="text-xs text-slate-400 mt-1">Multi-AZ Azure</p>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <p className="text-sm text-slate-300 font-medium">Incident MTTR</p>
                        <p className="text-2xl font-bold text-sky-400 mt-1 font-mono tabular-nums">12 min</p>
                        <p className="text-xs text-slate-400 mt-1">Automated runbooks</p>
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-sm text-slate-200 flex items-center justify-between font-medium">
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyan-400" />
                        Prometheus + Grafana + Azure Monitor Sync
                      </span>
                      <span className="text-emerald-400 font-semibold font-mono">200 OK</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-5 py-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400">
                <span>mariana-viana · azure-platform</span>
                <span className="text-cyan-400 font-mono">azure-eastus / brazilsouth</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
