import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Routes, Route } from "react-router-dom"; 
 
function App() {
  return ( 
<<<<<<< HEAD
    <div> 
=======
    <> 
>>>>>>> master
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
<<<<<<< HEAD
    </div>  
  );  
=======
      </>  
  );    
>>>>>>> master
}

export default App;
 