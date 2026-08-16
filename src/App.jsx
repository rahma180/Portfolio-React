import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx";
import Kontak from "./pages/kontak.jsx";
import Projek from "./pages/projek.jsx";
import Skills from "./pages/skills.jsx";
import "./App.css";

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projek" element={<Projek/>}/>
      <Route path="/kontak" element={<Kontak/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App