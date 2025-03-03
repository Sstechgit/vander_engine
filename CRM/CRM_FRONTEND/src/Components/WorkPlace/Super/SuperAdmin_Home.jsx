import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ViewLead from "./ViewLead";
const SuperAdmin_Home = () => {
  const [totalLeads, settotalLeads] = useState(null);
  const [totalAgents, settotalAgents] = useState(null);
  const [totalAdmins, settotalAdmins] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10000);
  const [vanderLeads, setVanderLeads] = useState(0);
  const [vandertransmissionLeads, setVanderTransmissionLeads] = useState(0);
  const [autopartsLeads, setAutoPartsLeads] = useState(0);
  const [llcLeads, setLlcLeads] = useState(0);
  const [sstechLead, setsstechLeads] = useState(0);
  const [facebookLeads, setfacebookLeads] = useState(0);
  const [notassignedLeads, setNotAssignedLeads] = useState(0);



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
    navigate("/crm/superadmin/TrackAgent");
  };
  //--------------------------------All Admins--------------------------------------
  const fetchAdmin = async () => {
    let url = urls.GET_USER;
    try {
      let result = await DoFetch(url);
      console.log(result)
      if (result.success === true) {
        const adminCount = result.payload.filter(user => user.designation === "Admin").length;
        settotalAdmins(adminCount); // Store the total number of admins
      } else {
        alert("Server issue occurred");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);
  const handleViewAllAdmin = () => {
    navigate("/crm/TrackAdmin");
  };


  //--------------------------------All Leads--------------------------------------
  const fetchLeads = async (page = currentPage, pageRows = pageSize) => {
    const url = `${urls.FetchLeads}/${page}/${pageRows}`;
    try {
      const result = await DoFetch(url);
      if (result.success) {
        const allLeads = result.payload.records || [];
        settotalLeads(result.payload.total || 0);
        return allLeads;
      } else {
        console.error("Server issue occurred", result);
        alert("Server issue occurred");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      // alert("Failed to fetch data. Please try again.");
    }
  };

  const filterLeads = (leads, filterBy, filterValue) => {
    if (filterBy && filterValue) {
      return leads.filter(lead => lead[filterBy]?.toLowerCase() === filterValue.toLowerCase()).length;
    }
    return leads;
  };

  useEffect(() => {
    fetchLeads();
  }, [currentPage, pageSize]);


  const navigationRoutes = {
    viewAll: "/crm/superadmin/Leads",
    vanderEngines: "/crm/superadmin/vanderengines_leads",
    vanderTransmissions: "/crm/superadmin/vandertransmission_leads",
    autoParts: "/crm/superadmin/autoparts_leads",
    llc: "/crm/superadmin/llc_leads",
    sstech: "/crm/superadmin/sstech_leads",
    facebook: "/crm/superadmin/facebook_leads",
    notAssigned: "/crm/superadmin/notassigned_leads"
  };


  const navigateTo = (route) => navigate(route);

  const fetchLeadCounts = async () => {
    const allLeads = await fetchLeads();
    const leadOrigins = {
      vanderEngines: "vander engines",
      vanderTransmissions: "vander engines transmissions",
      autoParts: "autopartsleads",
      llc: "usa auto parts llc",
      sstech: "ss tech",
      facebook: "facebook"
    };

    const counts = Object.fromEntries(
      Object.entries(leadOrigins).map(([key, value]) => [
        key,
        filterLeads(allLeads, 'origin', value)
      ])
    );

    setVanderLeads(counts.vanderEngines);
    setVanderTransmissionLeads(counts.vanderTransmissions);
    setAutoPartsLeads(counts.autoParts);
    setLlcLeads(counts.llc);
    setsstechLeads(counts.sstech);
    setfacebookLeads(counts.facebook);
    setNotAssignedLeads(allLeads.filter(lead => !lead.task?.[0]?._id).length);
  };

  useEffect(() => {
    fetchLeadCounts();
  }, [currentPage, pageSize]);


  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [leadCounts, setLeadCounts] = useState({});
  const states = ["Refund", "Sale", "Exchange", "Quotation Given"];
  const statusColors = { Refund: "green", Sale: "#52bf3d", "Quotation Given": "black", Exchange: "brown" };

  const fetchLeadsByState = async () => {
    const allLeads = await fetchLeads();
    const counts = allLeads.reduce((acc, lead) => {
      const state = lead.task?.[0]?.state || "Unknown";
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});
    setLeadCounts(counts);
    setLeads(allLeads);
  };

  useEffect(() => {
    fetchLeadsByState();
  }, [currentPage, pageSize]);

  const viewLeads = (state) => {
    const filteredLeads = leads.filter(lead => lead.task?.[0]?.state === state);
    setSelectedLeads(filteredLeads);
  };

  const handleViewAllClick = () => navigateTo(navigationRoutes.viewAll);


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
        {/*-----------------------Total Admins--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalAgents !== null ? (
                    <>
                      <h3>{totalAdmins}</h3>
                      <br />
                      <span>Total Admins</span>
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
                  onClick={handleViewAllAdmin} // Trigger state change to show Lead component
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
                      <h3>{vanderLeads}</h3>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.vanderEngines)} // Corrected navigation
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------VanderTransmission Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      <h3>{vandertransmissionLeads}</h3>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.vanderTransmissions)} // Corrected navigation
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
                      <h3>{autopartsLeads}</h3>
                      <br />
                      <span>Auto Parts Leads</span>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.autoParts)} // Corrected navigation
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
                      <h3>{llcLeads}</h3>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.llc)} // Corrected navigation
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
                      <h3>{sstechLead}</h3>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.sstech)} // Corrected navigation
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
                      <h3>{facebookLeads}</h3>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.facebook)} // Corrected navigation
                >
                  View All
                </Button>

              </div>
            </div>
          </div>
        </div>
        {/*-----------------------Not Assigned Leads--------------------------*/}
        <div className="card">
          <div className="content">
            <div className="details">
              <div className="data">
                <h3>
                  {totalLeads !== null ? (
                    <>
                      <h3>{notassignedLeads}</h3>
                      <br />
                      <span>Not Assigned Leads</span>
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
                  className="bg-gray-500"
                  onClick={() => navigateTo(navigationRoutes.notAssigned)} // Corrected navigation
                >
                  View All
                </Button>

              </div>
            </div>
          </div>
        </div>

        {/*-----------------------Not Assigned Leads--------------------------*/}
        {states.map((state) => (
          <div key={state} className="card">
            <div className="content">
              <div className="details">
                <div className="data">
                  <h3>
                    {leadCounts[state] !== undefined ? leadCounts[state] : 0}
                    <br />
                    <span>{state}</span>
                  </h3>
                </div>
                <div className="actionBtn">
                  <Button
                    type="primary"
                    size="large"
                    block
                    style={{
                      backgroundColor: statusColors[state],
                      color: "white",
                    }}
                    onClick={() => viewLeads(state)}
                  >
                    <ViewLead state={state} leads={selectedLeads} />
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
  width: 200px;
  height: 200px;
  background: #2a2a2a;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}
.card .content {
  position: relative;
  width: 100%;
  padding: 10px;
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

export default SuperAdmin_Home;
