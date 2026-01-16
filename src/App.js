import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import Storyline from "./pages/Storyline";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router>
        <Routes>

          <Route path="/" element={<Acceuil />} />

          <Route path="/about" element={<Storyline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
