import React, { useEffect, useState } from "react";
import SendChat from "./utilComp/SendChat";
import { mails, urls } from "../../../../links";
import { useParams } from "react-router-dom";
import { DoFetch } from "../../../Utils/DoFetch";
import EmailTile from "./utilComp/EmailTile";
import { handleCheckEmail } from "../../../Utils/checkNewEmail";

export default function Conversation({setload}) {
  const [subject, setsubject] = useState(null);
  const param=useParams()
  const [emails, setemails] = useState([])
  const [to, setto] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [count, setCount] = useState(0)
  const [leadInfo, setleadInfo] = useState({})
  const fetchEmails=async()=>{
    if(recordId==null){
      return
    }
    setload({
      spin:true,tip:"Loading"
    })
    const url=urls.FetchMail
    const extHeader={
      "record":recordId
    }
    const result=await DoFetch(url,"GET",null,extHeader)
 
    if(result.success && result.payload.emailChat.length>0){
      setemails(result.payload.emailChat)
      setsubject(result.payload.emailChat[0][0].subject)
      setCount(result.payload.conversation[0].count)
    }
    setload({
      spin:false,tip:""
    })
  }
  const fetchInfoLead=async(id)=>{
    const url=urls.getSingleLead;
    const extHeader={
      "leadId":id
    }
    let result=await DoFetch(url,"GET",null,extHeader)
    if(result.success==true){
     
      setleadInfo({
        description:result.payload.description,
        order:false
      })
    }
  }
  const [recordId, setrecordId] = useState(null)
  useEffect(() => {
    if (sessionStorage.getItem("to")) {
      setto(sessionStorage.getItem("to"));
    }
    if (sessionStorage.getItem("origin")) {
      setOrigin(sessionStorage.getItem("origin"));
    }
    setrecordId(param.id)
    fetchInfoLead(param.id)
  }, [])
  const sendmail=async(subject,text)=>{
    setload({
      spin:true,tip:"Loading"
    })

    let url=urls.sendMail
    alert(origin)
    let from=mails[origin]
    let replyTo=null
    let reference=[]
    let count=emails.length
    if(count!=0){
      //means conversation is started
      if(count==1){
        //only you have sent an email
        replyTo=emails[0][0].messageId
        reference=[emails[0][0].messageId]
      }
      else{
        replyTo=emails[count-1][0].messageId
        reference=emails[count-1][0].references
      }

    }
    let body=JSON.stringify({
      from,to,text,subject,recordId,type:param.type,replyTo,reference
    })
    let extHeader={
      "Content-Type":"application/json"
    }
    let result=await DoFetch(url,"POST",body,extHeader)

    if(result.success){
      await fetchEmails()
    }
    else{
      alert("Email is not sent.")
    }
    setload({
      spin:false,tip:""
    })
  }
  
  const checkEmail=async()=>{

    let result=await handleCheckEmail(recordId)

    if(result.success){
      if(result.payload.length!=0){
        if(count<result.payload[0].count){
          setCount(result.payload[0].count)
          await fetchEmails()
        }
      }
    }
  }
  useEffect(()=>{
    fetchEmails()

    let id=setInterval(async()=>{
      await checkEmail()
    },6000)
    return()=>{
      clearInterval(id)
    }
  },[recordId]);
  
  return (
    <div className="w-full h-calc-remaining flex-col flex-1">
      <div className="w-full p-4 h-[10%] flex justify-between bg-slate-900">
        {subject && (
          <p className="text-white ">
            <span className="text-pink-500 font-bold">SUBJECT : </span>
            {subject}
          </p>
        )}
        {to && (
          <p className="text-white">
            <span className="text-emerald-500 font-bold">To : </span>
            abc@xyz.com
          </p>
        )}
      </div>
      <div className="w-full h-[80%] overflow-y-scroll  flex flex-col p-2 gap-4">
        {
          emails.map((e,idx)=>{
            return <EmailTile key={idx} body={e[0].text} from={e[0].from} time={e[0].receivedAt} origin={sessionStorage.getItem("origin")}/>
          })
        }
      </div>
      <SendChat to={to} subject={subject} send={sendmail} record={leadInfo} setload={setload} />
    </div>
  );
}
