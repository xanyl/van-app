
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to ='/'>#vanlife</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}


