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
  //--------------------------------All Agents--------------------------------------
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

  //--------------------------------All Leads--------------------------------------

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

  //--------------------------------Vander Engines Leads--------------------------------------

  const fetchvanderenginesLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchvanderenginesLeads();
  }, [currentPage, pageSize]);
  const vanderenginesleads = () => {
    navigate("/crm/vanderengines_leads");
  };

  //--------------------------------Vander Engines Transmission Leads--------------------------------------

  const fetchvandertransmissionLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchvandertransmissionLeads();
  }, [currentPage, pageSize]);
  const vandertransmissionleads = () => {
    navigate("/crm/vandertransmission_leads");
  };

  //--------------------------------Auto Parts Leads--------------------------------------

  const fetchautopartsLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchautopartsLeads();
  }, [currentPage, pageSize]);
  const autopartsleads = () => {
    navigate("/crm/autoparts_leads");
  };

  //--------------------------------Auto Parts LLC Leads--------------------------------------

  const fetchllcLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchllcLeads();
  }, [currentPage, pageSize]);
  const llcleads = () => {
    navigate("/crm/llc_leads");
  };

  //--------------------------------SSTECH Leads--------------------------------------

  const fetchsstechLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchsstechLeads();
  }, [currentPage, pageSize]);
  const sstechleads = () => {
    navigate("/crm/sstech_leads");
  };

  //--------------------------------Facebook Leads--------------------------------------

  const fetchfacebookLeads = async (page = currentPage, pageRows = pageSize) => {
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
    fetchfacebookLeads();
  }, [currentPage, pageSize]);
  const facebookleads = () => {
    navigate("/crm/facebook_leads");
  };

  return (
    <div>
      <div className="details my-5">
        <h2>{sessionStorage.getItem("name") || "Admin"}</h2>
      </div>
      <div className="container flex items-center justify-center h-full flex-wrap gap-4">

        {/*-----------------------Total Agents--------------------------*/}
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
        {/*-----------------------Total Leads--------------------------*/}
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
        {/*-----------------------VanderEngines Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>Vander Engines Leads</span>
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
                  className=" bg-gray-500"
                  onClick={vanderenginesleads} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------VanderTransmission Leads--------------------------*/}\
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>Vander Engines Transmissions Leads</span>
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
                  className=" bg-blue-700"
                  onClick={vandertransmissionleads} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------Autoparts Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>Usa Auto Parts Leads</span>
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
                  onClick={autopartsleads} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------LLC Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>Usa Auto Parts LLC Leads</span>
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
                  className=" bg-yellow-500"
                  onClick={llcleads} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------SSTech Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>SSTECH Leads</span>
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
                  className=" bg-orange-500"
                  onClick={sstechleads} // Trigger state change to show Lead component
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------Facebook Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      {/* <h3>{totalLeads}</h3> */}
                      <br />
                      <span>Facebook Leads</span>
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
                  className=" bg-red-600"
                  onClick={facebookleads} // Trigger state change to show Lead component
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
  font-size: 0.8em;
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
