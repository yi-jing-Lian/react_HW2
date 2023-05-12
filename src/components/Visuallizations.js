import React from "react";
import amazon from "../images/amazon.jpg";

function Visuallizations(){
    return (        
        <div className="visuallizations">
            <h1>Visuallizations</h1>
            <p> There is Visuallizations </p>
            <a href='https://www.amazon.com'>前往Amazon</a>
            <br></br>
            <img src={amazon} />

            
        </div>
    );
}

export default Visuallizations;