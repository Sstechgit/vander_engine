import { Badge, Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleCheckEmail } from "../../../Utils/checkNewEmail";

// Assume `handleCheckEmail` is imported or defined somewhere

export default function EmailConversation({
  record = {}, // Default empty object
  conversationDisabled = false,
}) {
  // const navigate = useNavigate();
  // const [seen, setSeen] = useState(true);
  // const [count, setcount] = useState(0);



  // useEffect(() => {
  //   // Fetch email data when the component mounts or when `initial` is true

  //   checkEmail();
  //   const intervalId = setInterval(async () => {
  //     await checkEmail();
  //   }, 6000); // Check email every minute

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  // const checkEmail = async () => {
  //   const recordId = record?.leadId || record?.orderId;
  //   if (!recordId) return;

  //   try {
  //     const result = await handleCheckEmail(recordId);

  //     if (!result?.success || !Array.isArray(result.payload) || result.payload.length === 0) {
  //       return;
  //     }

  //     const firstEmail = result.payload[0];

  //     if (firstEmail?.seen === false) {
  //       setSeen(false);
  //       setcount(firstEmail.count || 0);
  //     } else {
  //       setSeen(true);
  //       setcount("");
  //     }
  //   } catch (error) {
  //     console.error("Failed to check email:", error);
  //   }
  // };


  return (
    <div>
      {/* <Badge count={!seen ? count : ""} type="primary"> */}
        <Button
          type="primary"
          onClick={() => window.location.href = "ms-outlook://"}
        >
          <i className="fa-solid fa-envelope"></i>
        </Button>

        {/* <Button
        onClick={() => {
        const recordId = record.leadId || record.orderId || record._id;
        if(!recordId){
          console.error("No valid record ID found" , record);
          return;
        }
          sessionStorage.setItem("to", record.email || "");
          sessionStorage.setItem("origin", record.origin || "");
          sessionStorage.setItem("conversationDisabled", conversationDisabled);
          if (record.orderId) {
            navigate(`/crm/agent/conversation/order/${record.orderId}`);
          } else if (record.leadId || record.type === "leads") {
            navigate(`/crm/agent/conversation/lead/${record.leadId}`);
          } else {
            console.error("No valid record ID found");
          }
        }}
        type="primary"
      >
        <i className="fa-solid fa-envelope"></i>
      </Button> */}
      {/* </Badge> */}
    </div>
  );
}
