import React from "react";
import Nav from "./navbar";
import Prog from "./program";
import Hero from "./hero";
import Contact from "./Contact";
import Testimonial from "./testin";
import Footer from "./footer";
 
function App(){
  return(
    // <div className="container">
    <>
    <div className="main">
       <Nav/>
       <Hero/>
    </div>
     <Prog/>
     
     <Testimonial/>
     <Contact/>
     <Footer/>
    
    </>
  );
}
export default App;