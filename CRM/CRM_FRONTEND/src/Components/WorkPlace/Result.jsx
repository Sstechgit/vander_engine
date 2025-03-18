import React, { useState } from "react";
import SideHeader from "./SideHeader";
import { Route, Routes } from "react-router-dom";
import SalesPeople from "./Admin/SalesPeople";
import Lead from "./Admin/Lead.jsx";
import Client from "./Admin/Client.jsx";
import Order from "./Admin/Order.jsx";
import Task from "./Admin/Task.jsx";
import AgentTask from "./Agent/Task.jsx";
import Calendar from "./Agent/Calendar.jsx";
import Conversation from "./Agent/Conversation.jsx";
import FollowUp from "./Agent/FollowUp.jsx";
import Customer_won from "./Agent/Customer_won.jsx";
import Client_quotation from "./Agent/Client_quotation.jsx";
import Orders from "./Agent/Orders.jsx";
import SearchParts from "./Agent/SearchParts.jsx";
import SearchForAdmin from "./Admin/SearchForAdmin.jsx";
import EmailSearch from "./Agent/EmailSearch.jsx";
import TrackAgent from "./Admin/TrackAgent.jsx";
import Invoice from "./Admin/Invoice.jsx";
import SendMessages from "./Agent/SendMessages.jsx";
import ChatConversation from "./Agent/ChatConversation.jsx";
import Agent_Home from "./Agent/Agent_Home.jsx";
import Admin_Home from "./Admin/Admin_Home.jsx";
import AllNotes from "./Notes/AllNotes.jsx";
import LLC_Leads from "./Admin/LLC_Leads.jsx";
import Facebook_Leads from "./Admin/Facebook_Leads.jsx";
import VanderEngine_Leads from "./Admin/VanderEngine_Leads.jsx";
import VanderTransmisssion_Leads from "./Admin/VanderTransmission_Leads.jsx";
import Autoparts_Leads from "./Admin/Autoparts_Leads.jsx";
import SSTech_Leads from "./Admin/SSTech_Leads.jsx";
import TwoFactor from "../TwoFactor.jsx";
import NotAssigned_Leads from "./Admin/NotAssigned_Leads.jsx";
import SuperAdmin_Home from "./Super/SuperAdmin_Home.jsx";
import TrackAdmin from "./Super/TrackAdmin.jsx";
import Super_Task from "./Super/Super_Task.jsx";
import Super_Lead from "./Super/Super_Lead.jsx";
import Super_TrackAgent from "./Super/Super_TrackAgent.jsx";
import Super_SalesPeople from "./Super/Super_SalesPeople.jsx";
import Super_Order from "./Super/Super_Order.jsx";
import Super_Client from "./Super/Super_Client.jsx";
import Super_Invoice from "./Super/Super_Invoice.jsx";
import Super_SearchForAdmin from "./Super/Super_SearchForAdmin.jsx";
import Super_VanderEngine_Leads from "./Super/Super_VanderEngine_Leads.jsx";
import Super_VanderTransmission_Leads from "./Super/Super_VanderTransmission_Leads.jsx";
import Super_Autoparts_Leads from "./Super/Super_Autoparts_Leads.jsx";
import Super_LLC_Leads from "./Super/Super_LLC_Leads.jsx";
import Super_SSTech_Leads from "./Super/Super_SSTech_Leads.jsx";
import Super_Facebook_Leads from "./Super/Super_Facebook_Leads.jsx";
import Super_NotAssigned_Leads from "./Super/Super_NotAssigned_Leads.jsx";
import Daily_Leads from "./Admin/Daily_Leads.jsx";


//------------------------------

export default function Result({ setload }) {
  return (
    <div className="w-[85%] h-screen flex flex-col">
      <SideHeader setload={setload} />
      <Routes>
        <Route path="/superadmin" element={<SuperAdmin_Home />} />
        <Route
          path="/TrackAdmin"
          element={<TrackAdmin setload={setload} />}
        ></Route>
        <Route path="/twofactor" element={<TwoFactor />} />

        <Route path="/admin" element={<Admin_Home />} />

        <Route
          path="/agents"
          element={<SalesPeople setload={setload} />}
        ></Route>
        <Route path="/Leads" element={<Lead setload={setload} />}></Route>
        <Route path="/daily_leads" element={<Daily_Leads />} />
        <Route path="/vanderengines_leads" element={<VanderEngine_Leads />} />
        <Route path="/vandertransmission_leads" element={<VanderTransmisssion_Leads />} />
        <Route path="/autoparts_leads" element={<Autoparts_Leads />} />
        <Route path="/llc_leads" element={<LLC_Leads />} />
        <Route path="/sstech_leads" element={<SSTech_Leads />} />
        <Route path="/facebook_leads" element={<Facebook_Leads />} />
        <Route path="/notassigned_leads" element={<NotAssigned_Leads />} />
        <Route path="/TrackAgent" element={<TrackAgent setload={setload} />}/>
        <Route path="/Client" element={<Client setload={setload} />} /> 
        <Route path="/Order" element={<Order setload={setload} />} />
        <Route path="/Task" element={<Task setload={setload} />} />
        <Route path="/SearchForAdmin" element={<SearchForAdmin setload={setload} />} />
        <Route path="/Invoice" element={<Invoice setload={setload} />} />

        {/*Super*/}
        <Route path="superadmin/Task" element={<Super_Task setload={setload} />} />
        <Route path="superadmin/Leads" element={<Super_Lead setload={setload} />} />
        <Route path="superadmin/TrackAgent" element={<Super_TrackAgent setload={setload} />}/>
        <Route path="superadmin/agents"element={<Super_SalesPeople setload={setload} />} />
        <Route path="superadmin/Order" element={<Super_Order setload={setload} />} />
        <Route path="superadmin/Client" element={<Super_Client setload={setload} />} />
        <Route path="superadmin/Invoice" element={<Super_Invoice setload={setload} />} />
        <Route path="superadmin/SearchForAdmin" element={<Super_SearchForAdmin setload={setload} />} />
        <Route path="superadmin/vanderengines_leads" element={<Super_VanderEngine_Leads />} />
        <Route path="superadmin/vandertransmission_leads" element={<Super_VanderTransmission_Leads />} />
        <Route path="superadmin/autoparts_leads" element={<Super_Autoparts_Leads />} />
        <Route path="superadmin/llc_leads" element={<Super_LLC_Leads />} />
        <Route path="superadmin/sstech_leads" element={<Super_SSTech_Leads />} />
        <Route path="superadmin/facebook_leads" element={<Super_Facebook_Leads />} />
        <Route path="superadmin/notassigned_leads" element={<Super_NotAssigned_Leads />} />

        {/* Agent */}
        <Route path="/agent/Task" element={<AgentTask setload={setload} />} />
        <Route
          path="/agent"
          element={<Agent_Home setload={setload} />}
        />
        <Route
          path="/agent/FollowUp"
          element={<FollowUp setload={setload} />}
        />
        <Route
          path="/agent/Calendar"
          element={<Calendar setload={setload} />}
        />
        <Route
          path="/agent/Customer_won"
          element={<Customer_won setload={setload} />}
        />
        <Route
          path="/agent/Client_quotation"
          element={<Client_quotation setload={setload} />}
        />
        <Route path="/agent/Orders" element={<Orders setload={setload} />} />
        <Route
          path="/agent/conversation/:type/:id"
          element={<Conversation setload={setload} />}
        />
        <Route
          path="/agent/ChatConversation/:type/:id"
          element={<ChatConversation setload={setload} />}
        />
        <Route
          path="/agent/website"
          element={<SearchParts setload={setload} />}
        />
        <Route
          path="/agent/EmailSearch"
          element={<EmailSearch setload={setload} />}
        />
        <Route
          path="/agent/allnotes"
          element={<AllNotes />}
        />
      </Routes>
    </div>
  );
}
