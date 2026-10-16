import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  Download,
  MessageSquare
} from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  language: Language;
  onOpenResume: () => void;
  onOpenExport: () => void;
}

export const Contact: React.FC<ContactProps> = ({ language, onOpenResume, onOpenExport }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || (language === 'pt' ? 'Contato via Portfólio' : 'Contact via Portfolio')
    )}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 sm:py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            {language === 'pt' ? 'Canais de Contato & Oportunidades' : 'Get in Touch & Opportunities'}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'pt' ? 'Vamos Conversar?' : "Let's Connect"}
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'Disponível para contratação, projetos de engenharia de plataforma e novos desafios em Cloud & DevOps.'
              : 'Open for Cloud Engineering, DevOps, Platform Engineering roles, and strategic infrastructure discussions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    {language === 'pt' ? 'E-mail Profissional' : 'Professional Email'}
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-semibold text-white hover:text-cyan-300 transition-colors mt-0.5 block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                title="Copiar e-mail"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    {language === 'pt' ? 'Telefone / WhatsApp' : 'Phone / WhatsApp'}
                  </p>
                  <a
                    href={`https://wa.me/${profile.cleanPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white hover:text-emerald-300 transition-colors mt-0.5 block"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                title="Copiar telefone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-300">
                  {language === 'pt' ? 'Localização Atual' : 'Current Base'}
                </p>
                <p className="text-base font-semibold text-white mt-0.5">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Social Links & Download Buttons */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3.5">
              <p className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                {language === 'pt' ? 'Perfis & Downloads' : 'Profiles & Artifacts'}
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-sm font-semibold text-sky-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={onOpenResume}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'pt' ? 'Currículo (PDF)' : 'Resume (PDF)'}</span>
                </button>

                <button
                  onClick={onOpenExport}
                  className="p-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/70 text-cyan-200 border border-cyan-800/80 flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'pt' ? 'Exportar ZIP' : 'Export ZIP'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  {language === 'pt' ? 'Envie uma Mensagem Direta' : 'Send a Direct Message'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1.5">
                    {language === 'pt' ? 'Seu Nome:' : 'Your Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'pt' ? 'Ex: Recrutador / Engenheiro' : 'e.g. Recruiter / Engineer'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1.5">
                    {language === 'pt' ? 'Seu E-mail Corporativo:' : 'Your Work Email:'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">
                  {language === 'pt' ? 'Assunto / Oportunidade:' : 'Subject / Opportunity:'}
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={language === 'pt' ? 'Ex: Vaga Cloud / Platform Engineer' : 'e.g. Cloud / Platform Engineer Role'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1.5">
                  {language === 'pt' ? 'Mensagem:' : 'Message:'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'pt' ? 'Conte sobre a oportunidade, escopo do time e tecnologias...' : 'Details about the team, scope, and technical stack...'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <span className="text-xs sm:text-sm text-slate-400">
                  {language === 'pt' ? 'Dispara direto para seu cliente de e-mail.' : 'Opens pre-filled in your default mail app.'}
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'pt' ? 'Enviar Contato' : 'Send Message'}</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs font-mono text-emerald-300 text-center animate-in fade-in">
                  ✓ {language === 'pt' ? 'Cliente de e-mail acionado! Muito obrigada pelo contato.' : 'Mail client opened! Thank you for getting in touch.'}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
