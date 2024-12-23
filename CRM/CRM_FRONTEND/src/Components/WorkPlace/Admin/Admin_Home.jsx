import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const Admin_Home = () => {
  const [totalLeads, settotalLeads] = useState(null);
  const [totalAgents, settotalAgents] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const navigate = useNavigate();
  const fetchAgents = async (page = currentPage, pageRows = pageSize) => {
    let url = `${urls.trackAgent}/${page}/${pageRows}`;
    try {
      let result = await DoFetch(url);
      if (result.success === true) {
        settotalAgents(result.data.total); // Store the total agents
      } else {
        alert("Server issue occurred");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };
  useEffect(() => {
    fetchAgents(); 
  }, [currentPage, pageSize]); 
  const handleViewAllAgents = () => {
    navigate("/crm/TrackAgent"); 
  };


  const fetchLeads = async (page = currentPage, pageRows = pageSize) => {
    let url = `${urls.FetchLeads}/${page}/${pageRows}`;
    try {
      let result = await DoFetch(url);
      if (result.success === true) {
        settotalLeads(result.payload.total); // Store the total agents
      } else {
        alert("Server issue occurred");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };
  useEffect(() => {
    fetchLeads(); 
  }, [currentPage, pageSize]); 
  const handleViewAllClick = () => {
    navigate("/crm/Leads"); 
  };

  return (
    <div>
      <div className="details my-5">
        <h2>{sessionStorage.getItem("name") || "Admin"}</h2>
      </div> 
      <div className="container flex items-center justify-center h-full flex-wrap gap-4">


        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalAgents !== null ? (
                    <>
                      <h3>{totalAgents}</h3>
                      <br />
                      <span>Total Agents</span>
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
                  onClick={handleViewAllAgents} // Trigger state change to show Lead component
                >
                  View All
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
                  {totalLeads !== null ? (
                    <>
                      <h3>{totalLeads}</h3>
                      <br />
                      <span>Total Leads</span>
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
                  className=" bg-green-600"
                  onClick={handleViewAllClick} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>

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
  width: 350px;
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

export default Admin_Home;
