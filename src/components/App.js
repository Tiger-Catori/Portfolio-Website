import { useState } from "react";

import Navbar from './Navbar';
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
// import About from "./About";

function App() {
  return (
    <body>
      <Navbar/>
      <Hero />
      <div className="container__body">
        {/* <Navbar /> This means the width is not 100% of viewport */}
        
        {/* <Hero /> */}
        {/* Other components or content */}
        {/* <Projects/> */}
      
      </div>
      <Projects/>
      <Footer/>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </body>
  );
}

export default App;
