import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home'
import Projets from './Pages/Projets';
import Apropos from './Pages/APropos';



function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/Projets" element={<Projets />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
