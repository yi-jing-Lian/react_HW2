import React from "react";
import {Link} from "react-router-dom";
function Sidebar(){
    return (        
        <div >
            <h1>Sidebar</h1>
            <p> There is Sidebar </p>
            <ul>
                <li><Link to="/"> Dashboard </Link></li>
                <li><Link to="/Settings"> Setting </Link></li>
                <li><Link to="/Visuallizations"> Visuallizations </Link></li>
                <li><Link to="/Page4"> Page4 </Link></li>
                <li><Link to="/Page5"> Page5 </Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;