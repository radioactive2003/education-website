import React,{useRef} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Card,arr } from "./card";
 function Testimonial(){
    const slider = useRef();
    let tx=0;
    function slideForward(){
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX${tx}%`;
        
    }
    function slideBack(){
        if(tx< 0){
            tx+=25;
        }
        slider.current.style.transform=`translateX${tx}%`;
        
    }
    return(
        <div className="testi">
            <div className="test-title">
            <h4>Testimonials</h4>
            <h2>What others say</h2>
            </div>
            <div className="left-slide" onClick={slideForward}><FaArrowLeft size="40" color="white"/></div>
            <div className="right-slide"onClick={slideBack}><FaArrowRight  size="40" color="white"/></div>
            <div className="slider">
                <ul ref={slider}>
               {  arr.map((item)=>{
                return(
                <Card name={item.name} comp={item.company} words={item.words}/>);

                 } )}
                </ul>
            </div>


        </div>

    );
 }
 export default Testimonial;