import React from "react";
import { useLocation, Link } from 'react-router-dom'
import './style.css'
const FourOhFour = () => {
    const location = useLocation()
        return ( 

        <div className="container-four">
            <div className="row">	
            <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
{/* 
            <div className="div small-img"></div> */}
            
            </div>
            
            <div className="contant_box_404">
            <h3 className="h2">
            <div className="message">Look like you're lost, we could not find '{location.pathname}'</div>
            </h3>
            <img className="small-img image" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            <div className="bottom-msg">
            <div>Click below to go back to home page</div>
            <Link to="/"><button>TAKE ME HOME</button></Link>
            </div>
            
            
        </div>
            </div>
            </div>
            </div>
        </div>

        );
}

export default FourOhFour;
