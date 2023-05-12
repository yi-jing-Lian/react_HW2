import React from "react";
import doge from "../images/doge.jpg";

function Page4(){
    return (        
        <div>
            <h1>Page4</h1>
            <p> There is Page4 </p>
            <a href='https://www.google.com/search?q=%E5%90%89%E5%A8%83%E5%A8%83&sxsrf=APwXEdcpm11YHuMFUZ8DhpQ7PamQ2tMQ6w:1682919587203&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjT67iBtNP-AhXwQPUHHcgtBwUQ_AUoAXoECAEQAw&biw=1536&bih=666&dpr=1.25#imgrc=e2F-FdB5yBEcHM'>看一下吉娃娃</a>
            <br></br>
            <img src={doge} />
        </div>
    );
}

export default Page4;