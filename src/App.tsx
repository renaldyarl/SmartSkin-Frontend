import React, { useState } from 'react';
import './App.css';
import idFlag from './assets/id-flag.png';
import ukFlag from './assets/uk-flag.png';
import logo from './assets/logo.png';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'id'>('id');

  const text = {
    id: {
      info: 'Informasi Sensor',
      contact: 'Informasi Kontak',
      menu: ['Tekanan', 'Kelembapan'],
    },
    en: {
      info: 'Sensor Information',
      contact: 'Contact Info',
      menu: ['Pressure', 'Humidity'],
    },
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        {/* Logo sebagai link ke home */}
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>

        {/* Navbar */}
        <nav className="nav">
          {text[language].menu.map((item, i) => (
            <a key={i} href="#">
              {item}
            </a>
          ))}
        </nav>

        {/* Language Switch */}
        <div className="language-switch">
          <img
            src={language === 'id' ? idFlag : ukFlag}
            alt="flag"
            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main">
        <section className="info-box">
          <h3>{text[language].info} :</h3>
        </section>

        <section className="sensor-grid">
          {[...Array(6)].map((_, i) => (
            <div className="sensor-card" key={i}>
              <h4>Sensor {i + 1} :</h4>
            </div>
          ))}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>{text[language].contact}</p>
      </footer>
    </div>
  );
};

export default App;
