import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './About';
import Connexion from './Connexion';
import './App.css';
import Contact from './Contact';
function App() {
  return (
    <div>
      <h1 className="app-title">Projet React Dynamique</h1>
      <nav>
  <Link to="/">Accueil</Link> |{" "}
  <Link to="/apropos">À propos</Link> |{" "}
  <Link to="/contact">Contact</Link>
</nav>

      <Connexion />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/apropos" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </div>
  );
}

export default App;