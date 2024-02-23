import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home'
import Projets from './Pages/Projets';
import Apropos from './Pages/APropos';
import Contact from './Pages/Contact';
import React from 'react';

export const Context = React.createContext<any>("fr");

function App() {

  const [lang, setLang] = React.useState("fr" ? "fr" : "en")

  return (
    <Context.Provider value={[lang, setLang]}>
      <BrowserRouter basename="/portfolio">
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/Projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
