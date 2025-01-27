import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { parseCustomDate } from "../../../Utils/parseAndFormatDate";
import { Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import ViewLeads from "./ViewLeads"; // Import ViewLeads to use in this component
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
  "Exchange":"brown",
  "No Response": "gray",
};

const Agent_Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(200);
  const [task, setTask] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [leadCounts, setLeadCounts] = useState({
    total: 0,
    Refund: 0,
    Pending: 0,
    Failed: 0,
    "Not Interested": 0,
    "Voice Mail": 0,
    "Already Purchased": 0,
    Sale: 0,
    "Hot Lead": 0,
    "Quotation Given": 0,
    "Exchange": 0,
    "No Response": 0,
  });
  const [selectedStatus, setSelectedStatus] = useState("All"); // Track selected status for filter

  // Fetch task data based on the current status filter
  const fetchTask = async (page, pageRows, status = "All") => {
    // Modify URL based on the selected status filter
    let url = `${urls.GetTaskForAgent}/${page}/${pageRows}`;
    if (status !== "All") {
      url = `${urls.GetTaskForAgent}/${page}/${pageRows}?status=${status}`; // Add status as query param
    }

    const result = await DoFetch(url);
    // console.log(result);
    if (result.success) {
      const taskData = result.payload.records.map((taskval, idx) => {
        const lead = taskval.leads[0] || {}; // Get the first lead (in case there are multiple)
        return {
          id: idx + (currentPage - 1) * pageSize + 1,
          key: taskval._id,
          leadId: lead._id,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          description: lead.description,
          status: taskval.state,
          origin: lead.origin,
          deadline: parseCustomDate(
            taskval.deadline || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          created: parseCustomDate(
            taskval.leads[0].createdAt || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          TaskAssignedDate: parseCustomDate(taskval.createdAt),
          type: "leads",
          yard: taskval.yard,
          invoice: taskval.invoice,
          invoiceSaved: taskval.invoiceSaved,
        };
      });

      setTask(taskData);
      setTotalData(result.payload.total);

      // Update lead counts based on the filtered data
      const counts = {
        total: result.payload.total,
        Refund: result.payload.records.filter(
          (record) => record.state === "Refund"
        ).length,
        Pending: result.payload.records.filter(
          (record) => record.state === "Pending"
        ).length,
        Failed: result.payload.records.filter(
          (record) => record.state === "Failed"
        ).length,
        "Not Interested": result.payload.records.filter(
          (record) => record.state === "Not Interested"
        ).length,
        "Voice Mail": result.payload.records.filter(
          (record) => record.state === "Voice Mail"
        ).length,
        "Already Purchased": result.payload.records.filter(
          (record) => record.state === "Already Purchased"
        ).length,
        Sale: result.payload.records.filter((record) => record.state === "Sale")
          .length,
        "Hot Lead": result.payload.records.filter(
          (record) => record.state === "Hot Lead"
        ).length,
        "Quotation Given": result.payload.records.filter(
          (record) => record.state ===  "Quotation Given"
        ).length,
        "Exchange": result.payload.records.filter(
          (record) => record.state === "Exchange"
        ).length,
        "No Response": result.payload.records.filter(
          (record) => record.state === "No Response"
        ).length,
      };

      setLeadCounts(counts);
    } else {
      alert("Server issue occurred");
    }
  };

  // Fetch tasks on initial load or when status/page/size changes
  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchTask(currentPage, pageSize, selectedStatus);

    const intervalId = setInterval(() => {
      fetchTask(currentPage, pageSize, selectedStatus);
    }, 12000);

    return () => clearInterval(intervalId);
  }, [currentPage, pageSize, selectedStatus]);

  return (
    <div style={{overflowX:"hidden"}}>
      <div className="details mb-3">
        <h2>{sessionStorage.getItem("name") || ""}</h2>
      </div>
      <div className="container flex items-center justify-center h-full flex-wrap gap-4">
        {/* Card for Total Leads */}
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
                <Button
                  type="primary"
                  size="large"
                  block
                  // ghost
                  onClick={() => {
                    setSelectedStatus("All"); // Set status to "All" when Total Leads is clicked
                  }}
                >
                  {/* View All Leads */}
                  <ViewLeads task={task} state="All" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Status Cards */}
        {[
          "Refund",
          "Pending",
          "Failed",
          "Not Interested",
          "Voice Mail",
          "Already Purchased",
          "Sale",
          "Hot Lead",
          "Exchange",
          "No Response",
          "Quotation Given",
          
        ].map((status) => (
          <div className="card" key={status}>
            <div className="content">
              <div className="details">
                <div className="data">
                  <h3>
                    {leadCounts[status] || 0}{" "}
                    {/* Access the corresponding count */}
                    <br />
                    <span>{status}</span>
                  </h3>
                </div>
                <div className="actionBtn">
                  <Button
                    size="large"
                    ghost
                    block
                    style={{
                      backgroundColor: statusColors[status],
                      color: "white",
                    }}
                    onClick={() => {
                      setSelectedStatus(status); // Update status on button click
                    }}
                  >
                    {/* {status} */}
                    <ViewLeads task={task} state={status} />
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
