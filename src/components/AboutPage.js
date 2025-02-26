import React, { useState } from 'react';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
// Import ikony aplikacji
import appIcon from '../assets/icon.png';

const AboutPage = () => {
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
      aboutUs: 'O Nas',
      home: 'Strona Główna',
      paragraph1: 'Wraz ze wzrostem dostępu do urządzeń mobilnych, rośnie problem uzależnień z ich korzystania. Problem występuje wśród niemal wszystkich grup wiekowych, a w szczególności dosięga młodzieży. Uzależnienie prowadzi do pogorszenia staniu zdrowia psychicznego oraz ma negatywne skutki w zdrowiu fizycznym.',
      paragraph2: 'Nasz projekt polega na przedstawieniu w przyjemny sposób danych dotyczących korzystania z telefonu. Dodatkowo aplikacja ma funkcję edukacyjną, udostępnimy artykuły z poradami jak ograniczyć czas spędzany przed ekranem oraz jak zachęcać do tego innych. W dużym uproszczeniu nasz projekt ma na celu pomoc w zwalczaniu problemu uzależnień.',
      copyright: '© 2025 Shorts Tracker',
      project: 'Projekt Olimiady Zwolnieni z Teorii',
    },
    en: {
      title: 'Shorts Tracker',
      aboutUs: 'About Us',
      home: 'Home',
      paragraph1: 'With the increasing access to mobile devices, addiction problems related to their use are growing. This issue affects almost all age groups, but particularly impacts young people. This addiction leads to deterioration of mental health and has negative effects on physical health.',
      paragraph2: 'Our project aims to present phone usage data in an engaging way. Additionally, the app has an educational function - we will provide articles with tips on how to limit screen time and how to encourage others to do the same. In simple terms, our project aims to help combat addiction problems.',
      copyright: '© 2025 Shorts Tracker',
      project: 'Olimiada Zwolnieni z Teorii',
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
          <a href="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft size={16} />
            {currentText.home}
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

      {/* Treść strony */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className={`max-w-2xl w-full p-8 rounded-2xl ${theme === 'dark' ? 'bg-purple-800' : 'bg-white shadow-xl'}`}>
          {/* Ikona aplikacji - POWIĘKSZONA */}
          <div className="mx-auto mb-8 w-36 h-36 rounded-xl flex items-center justify-center">
            <img src={appIcon} alt="Shorts Tracker Logo" className="w-36 h-36" />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">{currentText.aboutUs}</h2>
          
          <div className="space-y-6 text-lg">
            <p>{currentText.paragraph1}</p>
            <p>{currentText.paragraph2}</p>
          </div>
          
          {/* Miejsce na informacje o zespole lub innych elementach */}
          <div className="mt-12 pt-6 border-t border-purple-700 flex justify-center">
            <img 
              src="/api/placeholder/100/100" 
              alt="Team Logo" 
              className="w-24 h-24 rounded-full opacity-70"
            />
          </div>
        </div>
      </main>

      {/* Stopka */}
      <footer className="py-6 text-center">
        <p>{currentText.copyright}</p>
        <p className="mt-2">{currentText.project}</p>
      </footer>
    </div>
  );
};

export default AboutPage;