import React, { useEffect, useState } from "react";

import { Button, Tag } from "antd";

export default function LeadTaskRelation({ record, openModal, selectLead,assigned,setredistribute,leadRecord }) {
  const [Assigned, setAssigned] = useState(assigned);

  const [html, sethtml] = useState(null);
  const handleDistributeButton = () => {
    selectLead([record.key]); //array
    leadRecord(record)
    openModal();
  };
  const handleReDistributeButton = () => {
    selectLead([record.key]); //array
    leadRecord([record])
  
    setredistribute(true)
    openModal();
  };


  const IsAssigned = async () => {
    if (record.assigned == true) {
      setAssigned(true);
      
      let color = "blue";
      if (record.task.state === "Pending") {
        color = "cyan";
      } else if (record.task.state === "Completed") {
        color = "green";
      } else {
        color = "red";
      }
      let Html = (
        <div className="w-full flex flex-col" key={record.key}>
          <div className="flex items-center justify-center gap-2">
            <Tag color={color}>{record.task.state}</Tag>
            {record.task.state != "Completed" && (
              <Button type="default" onClick={handleReDistributeButton}>Redistribute</Button>
            )}
          </div>
          <p className="indent-3 font-bold">{record.agent?.email}</p>
          
        </div>
      );
      sethtml(Html);
   
    } else {
      let Html = (
        <div className="w-full flex flex-col" key={record.key}>
          <div className="flex items-center justify-center gap-2">
            <Tag color="red">Not Assigned</Tag>
            <Button
              type="default"
              onClick={handleDistributeButton}
              key={record.key}
            >
              Distribute
            </Button>
        
          </div>
        </div>
      );
      sethtml(Html);

      setAssigned(false);
    
 
    }
  };
  useEffect(() => {
    IsAssigned();
  }, [assigned,record.agent?._id]);
  return <div>{html}</div>;
}
