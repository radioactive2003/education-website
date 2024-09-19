import React,{useEffect,useState} from "react";
import { FaGraduationCap } from "react-icons/fa6";
import {Link} from 'react-scroll';//nom i react-scroll for scrolling functions

function Nav(){
    const [back,setBack]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>50?setBack(true):setBack(false);
        })
    },[]);//adding background color when scrolling
    return(
        <nav  className={back?"nav-back":""}>
            <div className="title">
            <span><FaGraduationCap  size="60px" color="white"/></span>
            <h2>EDU-KUN</h2>
            </div>
            <div className="menu">
                {/* here link tag scrolls to the specified div given in to attribute*/}
                <h3><Link to="Hero" 
                    smooth={true} 
                      offset={0} 
                 duration={500}>Home</Link>
                 </h3>
                <h3><Link to="prog" 
       
                  smooth={true} 
                offset={-100} 
                 duration={500}>Programs</Link></h3>
                <h3><Link to="testi" 
       
                        smooth={true} 
                        offset={0} 
                       duration={500}>Testimonials</Link></h3>
                
                <h3><Link to="Contact" 
       
                        smooth={true} 
                         offset={-100} 
                      duration={500}>Contact us</Link></h3>
            </div>

        </nav>
    );
}
export default Nav;