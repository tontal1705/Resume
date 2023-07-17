import React, { Suspense } from "react";

import HeadNavbar from './Component/HeadNavbar'
import Info from './Component/Info'
import Skills from './Component/Skills'
import Edu_History from './Component/Edu_History'
import Intership from './Component/Intership'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Suspense fallback={null}>
        <HeadNavbar />
            <Routes>
              <Route exact path="/" element={<Info />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Edu_History" element={<Edu_History />} />
              <Route path="/Intership" element={<Intership />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            
            </Routes>
            <Footer />
          </Suspense>
    </div>
  );
}

export default App;
