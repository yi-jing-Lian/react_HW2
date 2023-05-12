import React from "react";
import cat from "../images/cat.jpg";
function Settings(){
    return (        
        <div className='Settings'>
            <h1>Settings</h1>
            <p> There is Settings </p>
            <a href='https://www.google.com'>前往google</a>
            <br></br>
            <img src={cat} />
            
        </div>
    );
}

export default Settings;