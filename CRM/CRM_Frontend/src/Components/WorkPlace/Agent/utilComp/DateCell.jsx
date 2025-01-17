import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "antd";
import dayjs from "dayjs";

import DescriptionModel from "../DescriptionModel";

export default function DateCell({ value,tasks,dateVal, showdata,open,setopen, setload,cancelmodal,change }) {
  const [taskArr, setTasks] = useState([]);
  const [descriptionModal, setDescriptionModal] = useState(false)
  const [descRecord, setdescRecord] = useState({})
  // console.log(open)
  const Taskcolumns = [
    {
      title: "Title",
      dataIndex: "title2",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "desc", // Ensure this matches the key in tasks
      key: "desc",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "",
      dataIndex: "info",
      key: "info",
      render: (_, record) => (
        <DescriptionModel record={record}/>
      ),
    },
   
  ];

  const getTasks = async () => {
   
      if(tasks.length===0){
        return
      }
   
      // console.log(result.payload)
      let note=[]

     tasks.forEach((e,idx)=>{
      if(e.date!==dateVal){
        return
      }
      if(e.type=="leads"){
        note.push({
          key: e._id,
          _id: idx+1,
          title: e.title.slice(0, 6) + "...",
          title2:e.title,
          date: e.date,
          type: e.type,
          desc: e.description,
          description:e.details.description,
          order:false
        })
      }
      else{
        note.push({
          key: e._id,
          _id: idx+1,
          title: e.title.slice(0, 6) + "...",
          title2:e.title,
         
          type: e.type,
          desc: e.description,
          cvv:e.details.CVV,
          amount:e.details.amount,
          billing_address:e.details.billing_address,
          card_no:e.details.card_no,
          date:e.details.date,
          description:e.details.description,
          expiry_date:e.details.expiry_date,
          name:e.details.name,
          origin:e.details.origin,
          part:e.details.part,
          shipping_address:e.details.shipping_address,
          order:true
        })
      }
     }) 
      setTasks(note);
    
  

  
  }
  useEffect(() => {
    // console.log("Rerendered")
    getTasks()
  }, [value]); // Re-fetch tasks when value changes
  
  const handleDescriptionModal=(record)=>{
    setDescriptionModal(true)
  }
  const handleCancel = () => {
    change(true)
    // console.log(showdata,"dadas")
    if (cancelmodal) cancelmodal(); // Call the cancelmodal function if provided
  };

  return (
    <div>
      {/* <DescriptionModel /> */}
      <Modal
        width={1500}
        open={showdata}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" onClick={handleCancel}>
            Ok
          </Button>,
        ]}
      >
        <Table locale={{ emptyText: 'No Data available' }}
          columns={Taskcolumns}
          dataSource={taskArr}
          scroll={{ x: "max-content" }}
        />
      </Modal>
      <ul>
        {taskArr.map((item) => (
          <li key={item.key} onClick={() => setopen(dayjs(value).format("YYYY-MM-DD"))}>
            <div className="bg-orange-300 border-2 border-slate-300 text-center">
              <h1>
                {item.title} <span className="text-violet-800 font-normal">{item.type}</span>
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
