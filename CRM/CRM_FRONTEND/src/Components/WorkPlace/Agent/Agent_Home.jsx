import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { parseCustomDate } from "../../../Utils/parseAndFormatDate";
import { Button, Pagination } from "antd";

import ViewLeads from "./ViewLeads";
import Daily_Leads from "./Daily_Leads";

const statusColors = {
  Refund: "green",
  Pending: "orange",
  Failed: "red",
  "Not Interested": "#575353",
  "Voice Mail": "blue",
  "Already Purchased": "purple",
  Sale: "#52bf3d",
  "Hot Lead": "#ff5722",
  "Quotation Given": "black",
  Exchange: "brown",
  "No Response": "gray",
};

const Agent_Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100000000);
  const [task, setTask] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [leadCounts, setLeadCounts] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [dailyleads, setDailyLeads] = useState(0);

  const fetchTask = async (page, pageRows, status = "All") => {
    try {
      let url = `${urls.GetTaskForAgent}/${page}/${pageRows}`;
      if (status !== "All") {
        url += `?status=${status}`;
      }
      const result = await DoFetch(url);
      if (result.success) {
        const taskData = result.payload.records.map((taskval, idx) => {
          const lead = taskval.leads[0] || {};
          return taskval?.orders
            ? {
              key: taskval._id,
              orderId: taskval.orders[0]._id,
              _id: (page - 1) * pageRows + idx + 1,
              name: taskval.orders[0].name,
              email: taskval.orders[0].email,
              phone: taskval.orders[0].phone,
              description: `${taskval.orders[0].description} ${taskval.orders[0].part}`,
              origin: taskval.orders[0]?.origin,
              order: true,
              deadline: parseCustomDate(taskval.deadline),
              createdLead: parseCustomDate(taskval.orders[0]?.date),
              TaskAssignedDate: parseCustomDate(taskval.createdAt),
              status: taskval.state,
              yard: taskval.yard,
            }
            : {
              id: idx + (currentPage - 1) * pageSize + 1,
              key: taskval._id,
              leadId: lead._id,
              name: lead.name,
              email: lead.email,
              phone: lead.phone,
              description: lead.description,
              status: taskval.state,
              origin: lead.origin,
              deadline: parseCustomDate(taskval.deadline || "Thu, Aug 22, 2024 at 2:17 PM"),
              created: parseCustomDate(lead.createdAt || "Thu, Aug 22, 2024 at 2:17 PM"),
              TaskAssignedDate: parseCustomDate(taskval.createdAt),
              type: "leads",
              yard: taskval.yard,
            };
        });
        setTask(taskData);
        setTotalData(result.payload.total);
        const counts = result.payload.records.reduce((acc, record) => {
          acc[record.state] = (acc[record.state] || 0) + 1;
          return acc;
        }, { total: result.payload.total });
        setLeadCounts(counts);
      }
    } catch (error) {
      console.error("Error fetching task data", error);
      alert("Server issue occurred");
    }
  };
  //--------------------------------Daily Leads--------------------------------------
  const fetchDailyLeads = async (page = currentPage, pageRows = pageSize) => {
    try {
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0); // 12:00 AM today

      const url = `${urls.GetTaskForAgent}/${page}/${pageRows}`;
      const result = await DoFetch(url);

      if (!result.success) {
        console.error("Server issue occurred");
        message.error("Server issue occurred, please try again.");
        return;
      }

      const allTasks = result.payload.records || [];
      setTotalData(result.payload.total || 0);

      // Filter tasks assigned today from 12:00 AM onwards
      const todayTasks = allTasks.filter((task) => {
        if (!task.createdAt) return false; // Ensure createdAt exists
        const assignedDate = new Date(task.createdAt);
        return assignedDate >= todayStart; // Compare timestamps
      });

      setDailyLeads(todayTasks.length || 0);
      console.log("Today's Leads Count:", todayTasks.length);
    } catch (error) {
      console.error("Error fetching daily assigned tasks:", error);
      message.error("Failed to fetch data. Please try again.");
    }
  };


  useEffect(() => {
    fetchDailyLeads(currentPage, pageSize);
  }, [currentPage, pageSize]);

  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) return;
    fetchTask(currentPage, pageSize, selectedStatus);
    const intervalId = setInterval(() => fetchTask(currentPage, pageSize, selectedStatus), 12000);
    return () => clearInterval(intervalId);
  }, [currentPage, pageSize, selectedStatus]);

  const renderStatusCard = (status) => (
    <div className="card" key={status}>
      <div className="content">
        <div className="details">
          <div className="data">
            <h3>
              {leadCounts[status] || 0}
              <br />
              <span>{status}</span>
            </h3>
          </div>
          <div className="actionBtn">
            <Button
              size="large"
              ghost
              block
              style={{ backgroundColor: statusColors[status], color: "white" }}
              onClick={() => setSelectedStatus(status)}
            >
              <ViewLeads task={task} state={status} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="details mb-3">
        <h2>{sessionStorage.getItem("name") || ""}</h2>
      </div>
      <div className="container flex items-center justify-center h-full flex-wrap gap-4">
        {/*-----------------------daily Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalData !== null ? (
                    <>
                      <h3>{dailyleads}</h3>
                      <br />
                      <span>Daily Basis</span>
                    </>
                  ) : (
                    <span>Loading...</span>
                  )}
                </h3>
              </div>
              <div className="actionBtn">
                <Button
                  type="primary"
                  size="large"
                  block
                  className=" bg-pink-500"
                  onClick={() => setSelectedStatus("Daily")}
                >
                  <Daily_Leads
                    task={task.filter(t => new Date(t.TaskAssignedDate) >= new Date(new Date().setHours(0, 0, 0, 0)))}
                    state="Daily"
                  />

                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {leadCounts.total}
                  <br />
                  <span>Total Leads</span>
                </h3>
              </div>
              <div className="actionBtn">
                <Button type="primary" size="large" block onClick={() => setSelectedStatus("All")}>
                  <ViewLeads task={task} state="All" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {["Refund", "Pending", "Failed", "Not Interested", "Voice Mail", "Already Purchased", "Sale", "Hot Lead", "Exchange", "No Response", "Quotation Given"].map(renderStatusCard)}
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
  justify-content: center;
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
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
`}
      </style>
    </div>
  );
};

export default Agent_Home;
