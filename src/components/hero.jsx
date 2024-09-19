import React from "react";
import { GoArrowRight } from "react-icons/go";

function Hero(){
    return(
    <div className="hero">
        <h1>We give better education for a better world</h1>
        <p>Our experience faculty and hitech technology gives students a better education at a good price</p>
        <button className="btn"> Explore more  <span><GoArrowRight size="30px"/></span></button>
    </div>);

}
export default Hero;