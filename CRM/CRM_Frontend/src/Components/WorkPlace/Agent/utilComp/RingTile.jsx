import React, { useEffect, useState } from "react";
import { formatDate } from "../../../../Utils/parseAndFormatDate";
import { Button, Image } from "antd";
import { urls } from "../../../../../links";
import { DoFetch } from "../../../../Utils/DoFetch";

export default function RingTile({
  from,
  to,
  text,
  attachment = null,
  sendersTo,date
}) {
  const [name, setname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [direction, setdirection] = useState(0);
  const [Attach, setAttach] = useState(null)
  const [attachmentHtml, setattachmentHtml] = useState(null)
  const displayDate=(blob,type,name)=>{
    let html;
    if(type.startsWith("image/")){
        //image
         html=<div className="p-2 flex items-center"><Image src={blob}  width={500} height={200} title={name}/></div>
       
    }
    else if(type.startsWith("video/")){
         html=<div className="p-2 flex items-center"><video src={blob} controls className="w-full" title={name}/></div>
    }
    else if(type.startsWith("audio/")){
        html=<div className="p-2 flex items-center"><audio src={blob} controls/></div>
    }
    else{
        html=<a href={blob} className="w-full flex justify-center" download="file"><Button>Download {name}</Button></a>
    }
    setattachmentHtml(html)
  }
  const handleMedia=async(req,res)=>{
    const url=urls.media
    const extHeader={
        "Content-Type":"application/json"
    }
    const body=JSON.stringify({
        "url":Attach[Attach.length-1].uri //last
    })
    let headers={
        "Authorization": `Bearer ${sessionStorage.getItem("accessT")}`,
        ...extHeader
    }
    const response=await fetch(url,{method:"POST",body,headers})
    if(!response.ok){
        alert("Fetching Attachment Failed. Please Try later")
        return
    }
    const blob=await response.blob()
    if(blob){
        const data= URL.createObjectURL(blob)
        displayDate(data,Attach[Attach.length-1].contentType,Attach[Attach.length-1].fileName)
    }
  }
  useEffect(() => {
    if (from.phoneNumber === sendersTo) {
      //you recieved
      setdirection(0);
    } else {
      setdirection(1);
    }
    if (from?.name) {
      setname(from.name);
    }
    setPhone(from.phoneNumber);
    
    if(attachment){
        
        setAttach(attachment)
    }
  }, [from, to, sendersTo,attachment]);
  return (
    <div
      className="max-w-[80%] min-w-[40%]  flex flex-col py-1"
      style={{
        alignSelf: direction == 1 ? "end" : "start",
        backgroundColor:
          direction == 1 ? "#ff6c003d" : "rgb(151 211 255 / 34%)",
      }}
    >
      <div className="flex justify-between w-full p-3 bg-slate-900 ">
        {name && <span className="text-green-400 text-['poppins'] ">{name}</span>}
        <span className="text-white font-semibold">{phone}</span>
      </div>
      <div className="text-wrap break-words p-3 text-md text-['Ubuntu']">{text}</div>

      <div className="text-wrap break-words p-3 text-sm italic text-right">{formatDate(new Date(date))}</div>
      {(Attach && attachmentHtml==null) && <Button onClick={handleMedia} className="bg-emerald-400" type="primary">Show Attachment</Button>}
      {attachmentHtml==null?"":attachmentHtml}
    </div>
  );
}
