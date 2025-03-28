import React, { useState } from 'react';
import { Wrench, ExternalLink } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'en' | 'ro'>('en');

  const content = {
    en: {
      title: 'Hope Electrics',
      subtitle: 'Website Under Construction',
      description: 'We are working hard to bring you a better experience. Our team of professional electricians continues to provide top-quality electrical services while our website is being updated.',
      portal: 'Customer Portal',
    },
    ro: {
      title: 'Hope Electrics',
      subtitle: 'Site Web în Construcție',
      description: 'Lucrăm din greu pentru a vă oferi o experiență mai bună. Echipa noastră de electricieni profesioniști continuă să ofere servicii electrice de înaltă calitate în timp ce site-ul nostru este actualizat.',
      portal: 'Portal Clienți',
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-gray-900 text-white">
      <div className="absolute top-4 right-4 space-x-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded ${language === 'en' ? 'bg-red-500 text-white' : 'bg-red-900'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ro')}
          className={`px-3 py-1 rounded ${language === 'ro' ? 'bg-red-500 text-white' : 'bg-red-900'}`}
        >
          RO
        </button>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          {content[language].title}
        </h1>

        <div className="flex items-center gap-2 mb-8">
          <Wrench className="text-red-500 animate-pulse" size={24} />
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-red-500">
            {content[language].subtitle}
          </h2>
        </div>

        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-gray-300">
          {content[language].description}
        </p>

        <div className="space-y-6 text-center">
          <a
            href="https://portal.hopeeletrics.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            {content[language].portal}
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;