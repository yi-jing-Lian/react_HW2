import React from "react";
import what from "../images/what.jpg";
function Dashboard(){
    return (        
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p> There is Dashboard </p>
            <a href='https://www.ntust.edu.tw/'>前往NTUST</a>
            <img src={what} />
            
        </div>
    );
}

export default Dashboard;