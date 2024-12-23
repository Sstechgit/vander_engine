import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { parseCustomDate } from "../../../Utils/parseAndFormatDate";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ViewLeads from "./ViewLeads";  // Assuming ViewLeads is the modal for viewing leads

const Agent_Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(200);
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  const [totalData, setTotalData] = useState(0);
  
  // New state variables for different lead categories
  const [leadCounts, setLeadCounts] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    failed: 0,
    notInterested: 0,
    voiceMail: 0,
    alreadyPurchased: 0,
    sale: 0,
    hot: 0,
    closed: 0
  });

  // Fetch task data for agent
  const fetchTask = async (page, pageRows) => {
    let url = `${urls.GetTaskForAgent}/${page}/${pageRows}`;
    const result = await DoFetch(url);

    if (result.success) {
      const taskData = result.payload.records.map((taskval, idx) => {
        const lead = taskval.leads[0] || {};  // Ensure `leads` exists
        return {
          key: taskval._id,
          leadId: lead._id,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          description: lead.description,
          status: taskval.state,
          origin: lead.origin,
          deadline: parseCustomDate(taskval.deadline),
          createdLead: parseCustomDate(lead.createdAt),
          TaskAssignedDate: parseCustomDate(taskval.createdAt),
          type: "leads",
          yard: taskval.yard,
          invoice: taskval.invoice,
          invoiceSaved: taskval.invoiceSaved,
        };
      });

      setTask(taskData);
      setTotalData(result.payload.total);
      
      // Count leads by status
      const counts = {
        total: result.payload.total,
        completed: result.payload.records.filter(record => record.state === "Completed").length,
        pending: result.payload.records.filter(record => record.state === "Pending").length,
        failed: result.payload.records.filter(record => record.state === "Failed").length,
        notInterested: result.payload.records.filter(record => record.state === "Not Interested").length,
        voiceMail: result.payload.records.filter(record => record.state === "Voice Mail").length,
        alreadyPurchased: result.payload.records.filter(record => record.state === "Already Purchased").length,
        sale: result.payload.records.filter(record => record.state === "Sale").length,
        hot: result.payload.records.filter(record => record.state === "Hot Lead").length,
        closed: result.payload.records.filter(record => record.state === "Closed").length
      };

      setLeadCounts(counts);
    } else {
      alert("Server issue occurred");
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchTask(currentPage, pageSize);

    const intervalId = setInterval(() => {
      fetchTask(currentPage, pageSize);
    }, 12000);

    return () => clearInterval(intervalId);
  }, [currentPage, pageSize]);

  return (
    <div>
      <div className="details mb-3">
        <h2>{sessionStorage.getItem("name") || ""}</h2>
      </div>
      <div className="container flex items-center justify-center h-full flex-wrap gap-4">
        {/* Card for Total Leads */}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>{leadCounts.total}<br /><span>Total Leads</span></h3>
              </div>
              <div className="actionBtn">
                <Button type="primary" size="large" block>
                  Total Leads
                  <ViewLeads record={task} state="Voice Mail" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat for other categories (Completed, Pending, etc.) */}
        {["completed", "pending", "failed", "notInterested", "voiceMail", "alreadyPurchased", "sale", "hot", "closed"].map((status) => (
          <div className="card" key={status}>
            <div className="content">
              <div className="details">
                <div className="data">
                  <h3>{leadCounts[status]}<br /><span>{status.replace(/([A-Z])/g, " $1")}</span></h3>
                </div>
                <div className="actionBtn">
                  <Button type="primary" size="large" block>
                    {status.replace(/([A-Z])/g, " $1")}
                    <ViewLeads record={task} state={status} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       <style>
          {`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1c1c1c;
}
.card {
  position: relative;
  width: 250px;
  background: #2a2a2a;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}


.card .content {
  position: relative;
  width: 100%;
  padding: 20px;
  z-index: 1;
}
 .details {
  width: 100%;
  text-align: center;
}
.details h2 {
  font-size: 1.5em;
  font-weight: 600;
  color: #45f3ff;
  line-height: 1.2em;
}
.card .content .details .data {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 30px;
}
.card .content .details .data h3 {
  font-size: 1.1em;
  color: #45f3ff;
  line-height: 1.2em;
  font-weight: 600;
}
.card .content .details .data h3 span {
  font-size: 0.65em;
  font-weight: 400;
  color: #fff;
  opacity: 0.75;
}
.card .content .details .actionBtn {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 30px;
}
.card .content .details .actionBtn button {
  padding: 10px 35px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
}
.card .content .details .actionBtn button:hover {
  opacity: 1;
  transform: scale(1.05);
}
    `}
        </style>
    </div>
  );
};

export default Agent_Home;
