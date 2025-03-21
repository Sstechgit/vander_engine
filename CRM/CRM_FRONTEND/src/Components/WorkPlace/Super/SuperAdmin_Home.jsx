// import React, { useEffect, useState } from "react";
// import { urls } from "../../../../links";
// import { DoFetch } from "../../../Utils/DoFetch";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import ViewLead from "./ViewLead";
// const SuperAdmin_Home = () => {
//   const [totalLeads, settotalLeads] = useState(null);
//   const [totalAgents, settotalAgents] = useState(null);
//   const [totalAdmins, settotalAdmins] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setCurrentPageSize] = useState(10000);
//   const [vanderLeads, setVanderLeads] = useState(0);
//   const [vandertransmissionLeads, setVanderTransmissionLeads] = useState(0);
//   const [autopartsLeads, setAutoPartsLeads] = useState(0);
//   const [llcLeads, setLlcLeads] = useState(0);
//   const [sstechLead, setsstechLeads] = useState(0);
//   const [facebookLeads, setfacebookLeads] = useState(0);
//   const [notassignedLeads, setNotAssignedLeads] = useState(0);
//   const [refundleads, setrefundleads] = useState(0);
//   const [dailyleads, setDailyLeads] = useState(0);




//   const navigate = useNavigate();
//   //--------------------------------All Agents--------------------------------------
//   const fetchAgents = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.trackAgent}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         settotalAgents(result.data.total); // Store the total agents
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);

//     }
//   };
//   useEffect(() => {
//     fetchAgents();
//   }, [currentPage, pageSize]);
//   const handleViewAllAgents = () => {
//     navigate("/crm/superadmin/TrackAgent");
//   };
//   //--------------------------------Daily Leads--------------------------------------
//   const fetchDailyLeads = async (page = currentPage, pageRows = pageSize) => {
//     const now = new Date();
//     const last24Hours = now.getTime() - 24 * 60 * 60 * 1000; // Get timestamp of 24 hours ago

//     try {
//       const url = `${urls.FetchLeads}/${page}/${pageRows}`;
//       const result = await DoFetch(url);

//       if (result.success) {
//         const allLeads = result.payload.records || [];
//         settotalLeads(result.payload.total || 0);

//         // Filter leads created within the last 24 hours
//         const recentLeads = allLeads.filter(
//           (lead) => new Date(lead.createdAt).getTime() >= last24Hours
//         );

//         setDailyLeads(recentLeads.length);
//       } else {
//         console.error("Server issue occurred");
//         message.error("Server issue occurred, please try again.");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       message.error("Failed to fetch data. Please try again.");
//     }
//   };



//   useEffect(() => {
//     fetchDailyLeads();
//   }, [currentPage, pageSize]); // Ensure dependencies are correctly managed

//   const dailybasisleads = () => {
//     navigate("/crm/superadmin/daily_leads");
//   };

//   //--------------------------------All Admins--------------------------------------
//   const fetchAdmin = async () => {
//     let url = urls.GET_USER;
//     try {
//       let result = await DoFetch(url);
//       console.log(result)
//       if (result.success === true) {
//         const adminCount = result.payload.filter(user => user.designation === "Admin").length;
//         settotalAdmins(adminCount); // Store the total number of admins
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchAdmin();
//   }, []);
//   const handleViewAllAdmin = () => {
//     navigate("/crm/TrackAdmin");
//   };


//   //--------------------------------All Leads--------------------------------------
//   const fetchLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         settotalLeads(result.payload.total); // Store the total agents
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchLeads();
//   }, [currentPage, pageSize]);
//   const handleViewAllClick = () => {
//     navigate("/crm/superadmin/Leads");
//   };

//   //--------------------------------Vander Engines Leads--------------------------------------
//   const fetchvanderenginesLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let vanderCount = allLeads.filter(lead => lead?.origin.toLowerCase() === "Vander Engines".toLowerCase()).length;

//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setVanderLeads(vanderCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchvanderenginesLeads();
//   }, [currentPage, pageSize]);
//   const vanderenginesleads = () => {
//     navigate("/crm/superadmin/vanderengines_leads");
//   };

//   //--------------------------------Vander Engines Transmission Leads--------------------------------------
//   const fetchvandertransmissionLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let vandertransmissionCount = allLeads.filter(lead => lead?.origin.toLowerCase() === "Vander Engines Transmissions".toLowerCase()).length;

//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setVanderTransmissionLeads(vandertransmissionCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchvandertransmissionLeads();
//   }, [currentPage, pageSize]);
//   const vandertransmissionleads = () => {
//     navigate("/crm/superadmin/vandertransmission_leads");
//   };

//   //--------------------------------Auto Parts Leads--------------------------------------
//   const fetchautopartsLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let autopartsCount = allLeads.filter(lead => lead?.origin.toLowerCase() === "AutoPartsLeads".toLowerCase()).length;

//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setAutoPartsLeads(autopartsCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchautopartsLeads();
//   }, [currentPage, pageSize]);
//   const autopartsleads = () => {
//     navigate("/crm/superadmin/autoparts_leads");
//   };

//   //--------------------------------Auto Parts LLC Leads--------------------------------------
//   const fetchllcLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let llcCount = allLeads.filter(lead => lead?.origin?.toLowerCase() === "USA AUTO PARTS LLC".toLowerCase()).length;

//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setLlcLeads(llcCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchllcLeads();
//   }, [currentPage, pageSize]);
//   const llcleads = () => {
//     navigate("/crm/superadmin/llc_leads");
//   };

//   //--------------------------------SSTECH Leads--------------------------------------
//   const fetchsstechLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let sstechCount = allLeads.filter(lead => lead?.origin?.toLowerCase() === "SS TECH".toLowerCase()).length;
//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setsstechLeads(sstechCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchsstechLeads();
//   }, [currentPage, pageSize]);
//   const sstechleads = () => {
//     navigate("/crm/superadmin/sstech_leads");
//   };

//   //--------------------------------Facebook Leads--------------------------------------
//   const fetchfacebookLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let facebookCount = allLeads.filter(lead => lead?.origin?.toLowerCase() === "FACEBOOK".toLowerCase()).length;
//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setfacebookLeads(facebookCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchfacebookLeads();
//   }, [currentPage, pageSize]);
//   const facebookleads = () => {
//     navigate("/crm/superadmin/facebook_leads");
//   };

//   //--------------------------------Not Assigned Leads--------------------------------------
//   const fetchnotassignedLeads = async (page = currentPage, pageRows = pageSize) => {
//     let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//     try {
//       let result = await DoFetch(url);
//       if (result.success === true) {
//         let allLeads = result.payload.records || []; // Ensure it's an array
//         let notassignedCount = allLeads.filter(lead => !lead.task[0]?._id).length;
//         settotalLeads(result.payload.total || 0); // Ensure a default value
//         setNotAssignedLeads(notassignedCount);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchnotassignedLeads();
//   }, [currentPage, pageSize]);
//   const notassignedleads = () => {
//     navigate("/crm/superadmin/notassigned_leads");
//   };

//   //--------------------------------Refund Leads--------------------------------------
//   const [leads, setLeads] = useState([]); // Store full leads data
//   const [selectedLeads, setSelectedLeads] = useState([]); // Leads for the modal
//   const [leadCounts, setLeadCounts] = useState({});
//   const states = [
//     "Refund",
//     "Sale",
//     "Exchange",
//     "Quotation Given",
//   ];
//   const statusColors = {
//     Refund: "green",
//     Sale: "#52bf3d",
//     "Quotation Given": "black",
//     "Exchange": "brown",
//   };
//   // Function to fetch leads and count them based on state
//   const fetchLeadsByState = async (page = currentPage, pageRows = pageSize) => {
//     try {
//       let url = `${urls.FetchLeads}/${page}/${pageRows}`;
//       let result = await DoFetch(url);

//       if (result.success) {
//         let allLeads = result.payload.records || [];

//         // Count leads based on state dynamically
//         const counts = allLeads.reduce((acc, lead) => {
//           let state = lead.task?.[0]?.state || "Unknown";
//           acc[state] = (acc[state] || 0) + 1;
//           return acc;
//         }, {});
//         setLeadCounts(counts);
//         setLeads(allLeads);
//       } else {
//         alert("Server issue occurred");
//       }
//     } catch (error) {
//       console.error("Error fetching leads:", error);
//       // alert("Failed to fetch data. Please try again.");
//     }
//   };

//   useEffect(() => {
//     fetchLeadsByState();
//   }, [currentPage, pageSize]);

//   const viewLeads = (state) => {
//     if (!Array.isArray(leads)) {
//       console.error("Leads data is not an array:", leads);
//       return;
//     }

//     // Filter the leads array based on the selected state
//     const filteredLeads = leads.filter(
//       (lead) => lead.task?.[0]?.state === state
//     );
//     setSelectedLeads(filteredLeads); // Store filtered leads for modal
//   };

//   return (
//     <div>
//       <div className="details my-5">
//         <h2>{sessionStorage.getItem("name") || "Admin"}</h2>
//       </div>
//       <div className="container flex items-center justify-center h-full flex-wrap gap-4">

//         {/*-----------------------Total Agents--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalAgents !== null ? (
//                     <>
//                       <h3>{totalAgents}</h3>
//                       <br />
//                       <span>Total Agents</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   onClick={handleViewAllAgents} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------daily Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{dailyleads}</h3>
//                       <br />
//                       <span>Daily Basis</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>

//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-pink-500"
//                   onClick={dailybasisleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------Total Admins--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalAgents !== null ? (
//                     <>
//                       <h3>{totalAdmins}</h3>
//                       <br />
//                       <span>Total Admins</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   onClick={handleViewAllAdmin} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------Total Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{totalLeads}</h3>
//                       <br />
//                       <span>Total Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-green-600"
//                   onClick={handleViewAllClick} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------VanderEngines Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{vanderLeads}</h3>
//                       <br />
//                       <span>Vander Engines Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-gray-500"
//                   onClick={vanderenginesleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------VanderTransmission Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{vandertransmissionLeads}</h3>
//                       <br />
//                       <span>Vander Engines Transmissions Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-blue-700"
//                   onClick={vandertransmissionleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------Autoparts Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{autopartsLeads}</h3>
//                       <br />
//                       <span>Auto Parts Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-pink-500"
//                   onClick={autopartsleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------LLC Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {vanderLeads !== null ? (
//                     <>
//                       <h3>{llcLeads}</h3>
//                       <br />
//                       <span>Usa Auto Parts LLC Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-yellow-500"
//                   onClick={llcleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------SSTech Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{sstechLead}</h3>
//                       <br />
//                       <span>SSTECH Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-orange-500"
//                   onClick={sstechleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------Facebook Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{facebookLeads}</h3>
//                       <br />
//                       <span>Facebook Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-red-600"
//                   onClick={facebookleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*-----------------------Not Assigned Leads--------------------------*/}
//         <div className="card">
//           <div className="content">
//             <div className="details">
//               <div className="data">
//                 <h3>
//                   {totalLeads !== null ? (
//                     <>
//                       <h3>{notassignedLeads}</h3>
//                       <br />
//                       <span>Not Assigned Leads</span>
//                     </>
//                   ) : (
//                     <span>Loading...</span>
//                   )}
//                 </h3>
//               </div>
//               <div className="actionBtn">
//                 <Button
//                   type="primary"
//                   size="large"
//                   block
//                   className=" bg-black"
//                   onClick={notassignedleads} // Trigger state change to show Lead component
//                 >
//                   View All
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*-----------------------Not Assigned Leads--------------------------*/}
//         {states.map((state) => (
//           <div key={state} className="card">
//             <div className="content">
//               <div className="details">
//                 <div className="data">
//                   <h3>
//                     {leadCounts[state] !== undefined ? leadCounts[state] : 0}
//                     <br />
//                     <span>{state}</span>
//                   </h3>
//                 </div>
//                 <div className="actionBtn">
//                   <Button
//                     type="primary"
//                     size="large"
//                     block
//                     style={{
//                       backgroundColor: statusColors[state],
//                       color: "white",
//                     }}
//                     onClick={() => viewLeads(state)}
//                   >
//                     <ViewLead state={state} leads={selectedLeads} />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//       <style>
//         {`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Poppins", sans-serif;
// }
// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: #1c1c1c;
// }
// .card {
//   position: relative;
//   width: 200px;
//   height: 200px;
//   background: #2a2a2a;
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
// }
// .card .content {
//   position: relative;
//   width: 100%;
//   padding: 10px;
//   z-index: 1;
// }
// .details {
//   width: 100%;
//   text-align: center;
// }
// .details h2 {
//   font-size: 1.5em;
//   font-weight: 600;
//   color: #45f3ff;
//   line-height: 1.2em;
// }
// .card .content .details .data {
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
// }
// .card .content .details .data h3 {
//   font-size: 1.1em;
//   color: #45f3ff;
//   line-height: 1.2em;
//   font-weight: 600;
// }
// .card .content .details .data h3 span {
//   font-size: 0.8em;
//   font-weight: 400;
//   color: #fff;
//   opacity: 0.75;
// }
// .card .content .details .actionBtn {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   padding: 0 30px;
// }
// .card .content .details .actionBtn button {
//   padding: 10px 35px;
//   border: none;
//   outline: none;
//   border-radius: 5px;
//   font-size: 0.9em;
//   font-weight: 500;
//   cursor: pointer;
//   opacity: 0.9;
//   transition: 0.3s;
// }
// .card .content .details .actionBtn button:hover {
//   opacity: 1;
//   transform: scale(1.05);
// }
// .container {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
// }
// `}
//       </style>
//     </div>
//   );
// };

// export default SuperAdmin_Home;

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Radio, Card, Space } from "antd";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

const dataset = [
  { month: "Jan", seoul: 78 },
  { month: "Feb", seoul: 65 },
  { month: "Mar", seoul: 90 },
  { month: "Apr", seoul: 110 },
  { month: "May", seoul: 150 },
  { month: "Jun", seoul: 120 },
  { month: "Jul", seoul: 95 },
  { month: "Aug", seoul: 85 },
  { month: "Sep", seoul: 105 },
  { month: "Oct", seoul: 80 },
  { month: "Nov", seoul: 70 },
  { month: "Dec", seoul: 60 },
];




const TickParamsSelector = ({ tickPlacement, tickLabelPlacement, setTickPlacement, setTickLabelPlacement }) => {
  //--------------------------------All Agents--------------------------------------
  // const fetchAgents = async (page = currentPage, pageRows = pageSize) => {
  //   let url = `${urls.trackAgent}/${page}/${pageRows}`;
  //   try {
  //     let result = await DoFetch(url);
  //     if (result.success === true) {
  //       settotalAgents(result.data.total); // Store the total agents
  //     } else {
  //       alert("Server issue occurred");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching leads:", error);

  //   }
  // };
  // useEffect(() => {
  //   fetchAgents();
  // }, [currentPage, pageSize]);
  // const handleViewAllAgents = () => {
  //   navigate("/crm/superadmin/TrackAgent");
  // };
  return (
    <Card className="mb-4 p-4 shadow-md flex flex-lg-row">
      <Space direction="vertical" size="middle" className="">
        <div>
          <p className="font-semibold">Tick Placement</p>
          <Radio.Group value={tickPlacement} onChange={(e) => setTickPlacement(e.target.value)}>
            <Radio value="start">Start</Radio>
            <Radio value="end">End</Radio>
            <Radio value="middle">Middle</Radio>
          </Radio.Group>
        </div>

        <div>
          <p className="font-semibold">Tick Label Placement</p>
          <Radio.Group value={tickLabelPlacement} onChange={(e) => setTickLabelPlacement(e.target.value)}>
            <Radio value="inside">Inside</Radio>
            <Radio value="outside">Outside</Radio>
          </Radio.Group>
        </div>
      </Space>
      <div className="">Hii</div>
    </Card>
  );
};

const TickPlacementBars = () => {
  const [tickPlacement, setTickPlacement] = useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState("outside");

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />

      <Card className="p-4 shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataset}>
            <XAxis
              dataKey="month"
              tick={{ textAnchor: tickPlacement, dy: tickLabelPlacement === "inside" ? -10 : 10 }}
            />
            <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="seoul" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default TickPlacementBars;
