import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Employees from "./pages/Employees";
function App() { 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" component={Home} /> */}
          {/* Earlier above commented was used for routing */}
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
