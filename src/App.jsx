import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">

    <nav className="navbAR">
        <h1>Rohan Tamuli's Portfolio </h1>
        <ul className="ulContainer">
          <NavLink to="/" className={({isActive})=>isActive?"activeL":"LinkStyle"}>
            Home
          </NavLink>
          <NavLink to="/About" className={({isActive})=>isActive?"activeL":"LinkStyle"}>
            About
          </NavLink>
          <NavLink to="/Projects"className={({isActive})=>isActive?"activeL":"LinkStyle"}>
            Projects
          </NavLink>
          <NavLink to="/Contact" className={({isActive})=>isActive?"activeL":"LinkStyle"}>
            Contact Me
          </NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
  
      <footer>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
      </footer>

    </div>


    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
