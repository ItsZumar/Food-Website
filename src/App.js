import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Signin } from "./screens";
import { SideBar } from "./Components";
function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <Router>
      <div class="text-gray-600 font-body">
        <Routes></Routes>
        <div className="md:grid grid-cols-6">
          <div className="md:col-span-1 md:flex md:justify-end">
            <SideBar isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
          </div>
          <Routes>
            <Route path="/signin" exact element={<Signin />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
