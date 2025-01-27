import React, { useEffect, useState } from 'react'
import RingChatbtn from "./RingChatbtn"
import { useParams } from 'react-router-dom'
import { urls } from '../../../../links'
import { DoFetch } from '../../../Utils/DoFetch'
import { Button } from 'antd'
import RingTile from './utilComp/RingTile'
export default function ChatConversation({setload}) {
    const [to, setto] = useState(null)
    const [origin, setOrigin] = useState(null)
    const param = useParams()
    const [chats, setchats] = useState([])
 
  const [leadInfo, setleadInfo] = useState({})
  const [recordId, setrecordId] = useState(null)
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
      const authenticate=()=>{
       
        window.open(urls.auth,"_blank")
      }
    // const checkLogin=async()=>{
    //   const url=urls.checkLogin
    //   const result=await DoFetch(url,"GET")
    //   console.log(result)
    //   if(result.error=="Login"){
    //     setlogined(true)
    //   }
    //   else{
    //     setlogined(false)
    //   }
    // }
    useEffect(() => {
        if (sessionStorage.getItem("to_P")) {
          let phone=sessionStorage.getItem("to_P")
          if(!phone.startsWith("+1")){
            phone="+1"+phone
          }
            setto(phone);
        }
        if (sessionStorage.getItem("origin")) {
            setOrigin(sessionStorage.getItem("origin"));
        }
        setrecordId(param.id)
        fetchInfoLead(param.id)
        fetchChats()
        // authenticate()
    }, [])
    useEffect(()=>{
      fetchChats()
    },[to])
    useEffect(() => {
      // Fetch email data when the component mounts or when `initial` is true
  
      checkEmail();
      const intervalId = setInterval(async () => {
        await checkEmail();
      }, 6000); // Check email every minute
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [to]);
  
    const checkEmail = async () => {
     
  
      try {
        const result = await DoFetch(urls.checksms,"GET",null,{"to":record.phone});
        
  
  // console.log(result)
        if (result.success) {
          if(result.payload.length==0){
            return
          }
          if (result.payload[0].seen == false) {
            await fetchChats()
          } 

          // Update messageCount as well
        }
      } catch (error) {
        console.error("Failed to check email:", error);
      }
    };
    
    const fetchChats=async()=>{
     
      if(!to){
      
        return;
      }
      const url=urls.getChats
     
      const extHeader={
        "to":to
      }
      const result=await DoFetch(url,"GET",null,extHeader)
  
      if(result?.error && result.error=="ReLogin"){
        alert("Ring Central Session is expired. Relogin again to continue")
    
        authenticate()
        return
      }
      else{
        if(result.success==true){
          if(result?.payload && result?.payload?.records){
            setchats(result.payload.records)

          }
          else{
            setchats([])
          }
          alert("fetched")
          
        }
      }
    }

    return (
        <div className="w-full h-calc-remaining flex-col flex-1">
            <div className="w-full p-4 h-[10%] flex justify-between bg-slate-900">
                {/* {subject && (
          <p className="text-white ">
            <span className="text-pink-500 font-bold">SUBJECT : </span>
            {subject}
          </p>
        )} */}
                {to && (
                    <p className="text-white">
                        <span className="text-emerald-500 font-bold">To : </span>
                        {to?to.slice(0,5)+"...":""}
                    </p>
                )}
                <Button type="primary"  onClick={fetchChats}><span className='text-white'>Refresh</span></Button>
            </div>
            <div className="w-full h-[80%] overflow-y-scroll  flex flex-col p-2 gap-4">
                {
                      chats.map((e,idx)=>{
                        let attachment=null
                        if(e?.attachments && e.attachments.length!=0){
                          attachment=e.attachments
                        }
                        return <RingTile key={idx} from={e.from} to={e.to} text={e.subject} attachment={attachment} sendersTo={to} date={e.lastModifiedTime} />
                      })
           
                }
            </div>
            <RingChatbtn to={to} record={leadInfo} setload={setload} auth={authenticate} fetch={fetchChats}/>
        </div>
    )
}

