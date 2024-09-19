import React from "react";
import image1 from "../assets/prog1.jpg";
import image2 from "../assets/prog2.jpg";
import image3 from "../assets/prog3.jpg";
import icon1 from "../assets/image2.png";
import icon2 from "../assets/image3.png";
import icon3 from "../assets/1839274.png";
import { GoArrowRight } from "react-icons/go";


function Prog(){
    return(
        <div className="prog">
            <div className="prog-title">
             <h4>Our Program</h4>
             <h2>What we offer</h2>
            </div>
            <div className="img-container">
              <div className="prog-img">
                 <img src={image1} alt=""/>
                   <div className="caption">   
                    <img src={icon1}></img>
                    <p>enginnering</p>
                    </div>

              </div>
              <div className="prog-img">
                 <img src={image2} alt="" />
                 <div className="caption">   
                   <img src={icon2}></img>
                    <p>doctrine</p>
                    </div>

                </div>
              <div className="prog-img">
                <img src={image3} alt=""/>
                <div className="caption">   
                  <img src={icon3}></img>
                    <p>masters</p>
                    </div>
             </div>
            
            </div>
            <button className= " prog-btn" > Explore more<span><GoArrowRight size="30px"/></span></button>


        </div>
    )
}
export default Prog;