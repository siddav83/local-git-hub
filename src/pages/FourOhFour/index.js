import React from "react";
import { useLocation, Link } from 'react-router-dom'

const FourOhFour = () => {
    const location = useLocation()
        return ( 
            <section className="page_404">
        <div className="container">
            <div className="row">	
            <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">

            <div className="div small-img"></div>
            
            </div>
            
            <div className="contant_box_404">
            <h3 className="h2">
            <div>Look like you're lost, we could not find '{location.pathname}'</div>
            </h3>
            <img className="small-img image" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            
            <div>Click below to go back to home page</div>
            <Link to="/"><button>TAKE ME HOME</button></Link>
            
            
        </div>
            </div>
            </div>
            </div>
        </div>
    </section>
        );
}

export default FourOhFour;
