import React, { useState } from "react";
import MonitoringPage from "./pages/MonitoringPage";
import "./App.css";
import idFlag from "./assets/id-flag.png";
import ukFlag from "./assets/uk-flag.png";
import logo from "./assets/logo.png";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "id">("id");

  const text = {
    id: {
      info: "Informasi Sensor",
      contact: "Informasi Kontak",
      menu: ["Tekanan", "Kelembapan"],
    },
    en: {
      info: "Sensor Information",
      contact: "Contact Info",
      menu: ["Pressure", "Humidity"],
    },
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>

        <nav className="nav">
          {text[language].menu.map((item, i) => (
            <a key={i} href="#">
              {item}
            </a>
          ))}
        </nav>

        <div className="language-switch">
          <img
            src={language === "id" ? idFlag : ukFlag}
            alt="flag"
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main">
        <section className="info-box">
          <h3>
            {text[language].info} : Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h3>
        </section>

        <section className="sensor-grid">
          <MonitoringPage />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>{text[language].contact}</p>
      </footer>
    </div>
  );
};

export default App; // 🔥 ini penting
