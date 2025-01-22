import { Badge, Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleCheckEmail } from "../../../Utils/checkNewEmail";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function SendMessages({
    record,
    conversationDisabled = false,
  }) {
    const navigate = useNavigate();
    const [seen, setSeen] = useState(true);
    const [count, setcount] = useState(0);
  
    useEffect(() => {
      // Fetch email data when the component mounts or when `initial` is true
  
      checkEmail();
      const intervalId = setInterval(async () => {
        await checkEmail();
      }, 6000); // Check email every minute
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
  
    const checkEmail = async () => {
     
  
      try {
        const result = await DoFetch(urls.checksms,"GET",null,{"to":record.phone});
        
  
        // console.log(result)
        if (result.success) {
          if(result.payload.length==0){
            return
          }
          if (result.payload[0].seen == false) {
            setSeen(false);
            setcount(result.payload[0].count)
          } else {
            setSeen(true);
            setcount("")
          }
  
          // Update messageCount as well
        }
      } catch (error) {
        console.error("Failed to check email:", error);
      }
    };
    
    return (
      <div>
        <Badge count={!seen?count:""} type="primary">
        <Button
          onClick={() => {
            sessionStorage.setItem("to_P", record.phone || "");
            sessionStorage.setItem("origin", record.origin || "");
            sessionStorage.setItem("conversationDisabled", conversationDisabled);
            if (record.orderId) {
              navigate(`/crm/agent/ChatConversation/order/${record.orderId}`);
            } else if (record.leadId) {
              navigate(`/crm/agent/ChatConversation/lead/${record.leadId}`);
            } else {
              console.error("No valid record ID found");
            }
          }}
          type="primary"
        >
          <i className="fa-solid fa-comment"></i>
        </Button>
        </Badge>
      </div>
    );
  }
  

