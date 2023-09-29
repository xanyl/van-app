import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import '../src/App.css';
import './server'
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#vanlife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>

        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}
