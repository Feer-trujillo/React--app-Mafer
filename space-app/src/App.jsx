import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar.jsx';
import Astros from './componentes/astros/Astros.jsx';
import Apod from './componentes/apod/Apod.jsx'; 
import About from './componentes/about/About.jsx'; 
import './App.css';

function App() {
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/astros", text: "Astros" },
    { id: 3, href: "/apod", text: "Apod" },
    { id: 4, href: "/about", text: "About" }
  ];

  return (
    <Router>
      <Navbar links={links} />
      <div className="content"> 
        <Routes>
          <Route path="/" element={<h1>Space App</h1>} />
          <Route path="/astros" element={<Astros />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
