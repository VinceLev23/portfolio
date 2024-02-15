import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home'
import CV from './CV';
import path from 'path';
import Root from './Root';
import Projets from './Projets';
import Apropos from './APropos';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/Projets" element={<Projets />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
