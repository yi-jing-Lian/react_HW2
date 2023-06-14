import React from "react";
import amazon from "../images/amazon.jpg";
import { useState,useEffect } from "react";

const data=fetch('https://dog.ceo/api/breeds/image/random',{
    method:"GET"
})
    .then((res) => res.json())
    .catch((e)=>{
    console.log('api 讀取有誤');
});

function Visuallizations(){
    const [image,setTmage]=useState('');
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((data)=>data.json())
            .then((data)=>{
                console.log(data.message);
                setTmage(data.message);
            });

    },[]);

    return (        
        <div className="visuallizations">
            <h1>Visuallizations</h1>
            <p> There is Visuallizations </p>
            <a href='https://www.amazon.com'>前往Amazon</a>
            <br></br>
            <img src={amazon} />
            <img src={amazon} />

            
        </div>
    );
}

export default Visuallizations;