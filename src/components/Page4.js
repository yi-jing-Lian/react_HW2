import React, { useEffect, useState } from "react";
import doge from "../images/doge.jpg";
import { Space, Table, Tag } from 'antd';



const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 3,
      },
    },
    {
      title: '圖片網址',
      dataIndex: 'pictureUrl',
    },
    {
      title: 'NFT名稱',
      dataIndex: 'nftName',
    },
    {
      title: 'qrcode',
      dataIndex: 'qrcode',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
function Page4(){
  // const [image,setImage]=useState();
  // useEffect(()=>{
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((data) => data.json())
  //     .then((data)=>{
  //       console.log(data.message);
  //       setImage(data.message);
  //     });
  //   },[]);
    const [task, setTask]=useState('');
    useEffect(()=>{
      fetch("http://ec2-35-77-78-80.ap-northeast-1.compute.amazonaws.com:4000/task/list")
        .then((data) => data.json())
        .then((data)=>{
          console.log(data);
          setTask(data);
        });
      },[]);
    return (
              
        <div>
          
            <h1>Page4</h1>
            {/* <Table columns={columns} dataSource={data} />; */}
            <Table columns={columns} dataSource={task} onChange={onChange} />;
            {/* <img src={image} />
            <p> There is Page4 </p>
            <a href='https://www.google.com/search?q=%E5%90%89%E5%A8%83%E5%A8%83&sxsrf=APwXEdcpm11YHuMFUZ8DhpQ7PamQ2tMQ6w:1682919587203&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjT67iBtNP-AhXwQPUHHcgtBwUQ_AUoAXoECAEQAw&biw=1536&bih=666&dpr=1.25#imgrc=e2F-FdB5yBEcHM'>看一下吉娃娃</a>
            <br></br>
            <img src={doge} /> */}
        </div>
    );
}

export default Page4;