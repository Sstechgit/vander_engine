import React, { useEffect, useState } from "react";
import { Calendar as AntCalendar } from "antd";
import dayjs from "dayjs";
import DateCell from "./utilComp/DateCell";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
// import DateCell from "./utilComp/DateCell.jsx";

export default function Calendar({setload}) {
  const [value, setValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [open, setOpen] = useState(null); // Manage which date's modal is open
  const [change, setchange] = useState(false)
  const handleOpen = (date) => setOpen(date); // Set the date for the modal
  const handleClose = () => setOpen(null); // Close the modal
const [allTasks, setallTasks] = useState([])
  const onSelect = (newValue) => {
    const formattedDate = dayjs(newValue).format("YYYY-MM-DD");
    setOpen(formattedDate);
    setValue(formattedDate);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    const formattedDate = dayjs(newValue).format("YYYY-MM-DD");
    // setOpen({formattedDate:true});
    // setValue(formattedDate);
    setSelectedValue(newValue);
  };
  useEffect(()=>{
    if(change==true){
      setOpen(null)
      setchange(false)
    }
    
  },[change])
  const fetchTasks = async () => {
    
    // setload({
    //   spin:true,tip:"Loading"
    // })
   
    // setload({
    //   spin:true,tip:"Loading"
    // })
    const url = urls.getbydate;
    const extHeader = {
      NoteDate: dayjs(value).format("YYYY-MM-DD"),
    };
    const result = await DoFetch(url, "GET", null, extHeader);
    console.log(result)
    if (result.success) {
      // console.log(result.payload)
      setallTasks(result.payload)
    }
  
    // setload({
    //   spin:false,tip:""
    // })
  };
useEffect(()=>{
  fetchTasks()
},[])
  
  return (
    <div className="w-full border-2 border-black h-[40rem] overflow-y-hidden">
      <AntCalendar fullscreen={false} 
      
        cellRender={(date) => (
          <DateCell  tasks={allTasks}
          key={dayjs(date).format("YYYY-MM-DD")}
            value={date}
            dateVal={dayjs(date).format("YYYY-MM-DD")}
            open={open}
            showdata={open==dayjs(date).format("YYYY-MM-DD")||false}
            setopen={handleOpen}
            change={setchange}
            onSelect={onSelect}
          />
        )}
        
        onPanelChange={onPanelChange}
      />
    </div>
  );
}
