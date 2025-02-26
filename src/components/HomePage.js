import React, { useState } from 'react';
import { Download, Instagram, Facebook, Youtube, Moon, Sun } from 'lucide-react';
// Import ikony aplikacji
import appIcon from '../assets/icon.png';

const HomePage = () => {
  const [language, setLanguage] = useState('pl'); // 'pl' lub 'en'
  const [theme, setTheme] = useState('dark'); // 'dark' lub 'light'

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Teksty w różnych językach
  const text = {
    pl: {
      title: 'Shorts Tracker',
      slogan: 'Pomóż sobie świadomie korzystać z mediów społecznościowych',
      download: 'Pobierz z Google Play',
      followUs: 'Śledź nas w social mediach:',
      copyright: '© 2025 Shorts Tracker',
      project: 'Olimpiada Zwolnieni z Teorii',
      feature1Title: 'Śledź Użycie',
      feature1Desc: 'Monitoruj codzienne oglądanie krótkich filmów i analizuj swoje nawyki.',
      feature2Title: 'Zachowaj Skupienie',
      feature2Desc: 'Użyj naszego trybu skupienia, aby ograniczyć rozpraszające krótkie filmy i zwiększyć produktywność.',
      aboutUs: 'O Nas'
    },
    en: {
      title: 'Shorts Tracker',
      slogan: 'Help yourself consciously use social media',
      download: 'Download from Google Play',
      followUs: 'Follow us on social media:',
      copyright: '© 2025 Shorts Tracker',
      project: 'Olimpiada Zwolnieni z Teorii',
      feature1Title: 'Track Usage',
      feature1Desc: 'Monitor your daily short video consumption and get insights into your viewing habits.',
      feature2Title: 'Stay Focused',
      feature2Desc: 'Use our focus mode to limit distracting short video content and boost productivity.',
      aboutUs: 'About Us'
    }
  };

  const currentText = text[language];

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-purple-900 text-white' : 'bg-purple-100 text-gray-800'}`}>
      {/* Nagłówek */}
      <header className="py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          {currentText.title}
        </h1>
        <div className="flex items-center gap-4">
          <a href="/about" className="hover:underline">
            {currentText.aboutUs}
          </a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-purple-800 hover:bg-purple-700"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleLanguage} 
            className="px-3 py-1 rounded-full bg-purple-800 hover:bg-purple-700"
          >
            {language === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
      </header>

      {/* Sekcja główna */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Ikona aplikacji - POWIĘKSZONA */}
        <div className="mb-8 w-48 h-48 rounded-xl flex items-center justify-center">
          <img src={appIcon} alt="Shorts Tracker Logo" className="w-48 h-48" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {currentText.title}
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mb-12">
          {currentText.slogan}
        </p>
        <button className="flex items-center gap-2 bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105">
          <Download size={24} />
          {currentText.download}
        </button>

        {/* Sekcja z funkcjami */}
        <div className="mt-24 w-full max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-purple-800' : 'bg-white shadow-md'}`}>
              <h3 className="text-xl font-bold mb-3">{currentText.feature1Title}</h3>
              <p>{currentText.feature1Desc}</p>
            </div>
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-purple-800' : 'bg-white shadow-md'}`}>
              <h3 className="text-xl font-bold mb-3">{currentText.feature2Title}</h3>
              <p>{currentText.feature2Desc}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Sekcja social media */}
      <section className="py-12 text-center">
        <h3 className="text-2xl mb-8">{currentText.followUs}</h3>
        <div className="flex justify-center gap-8">
          {/* Zamiana linków na przyciski, aby uniknąć błędów ESLint */}
          <button 
            onClick={() => window.open('https://instagram.com', '_blank')} 
            className="p-4 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors text-white"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </button>
          <button 
            onClick={() => window.open('https://facebook.com', '_blank')} 
            className="p-4 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors text-white"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </button>
          <button 
            onClick={() => window.open('https://youtube.com', '_blank')} 
            className="p-4 rounded-full bg-purple-800 hover:bg-purple-700 transition-colors text-white"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </button>
        </div>
      </section>

      {/* Stopka */}
      <footer className="py-6 text-center">
        <p>{currentText.copyright}</p>
        <p className="mt-2">{currentText.project}</p>
      </footer>
    </div>
  );
};

export default HomePage;