/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  }, [language]);

  // Handle escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumeModalOpen(false);
        setExportModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Fixed Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenExport={() => setExportModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          language={language}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenExport={() => setExportModalOpen(true)}
        />

        <About language={language} />

        <Skills language={language} />

        <Projects language={language} />

        <Experience language={language} />

        <Education language={language} />

        <Contact
          language={language}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenExport={() => setExportModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        language={language}
      />

      {/* Project Export & Deployment Guide Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        language={language}
      />

    </div>
  );
}
