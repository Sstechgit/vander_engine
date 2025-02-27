import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuStyle.css";
export default function Menu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState({});
  const focusStyle = {
    backgroundColor: "rgb(255, 97, 118)",
    color: "#fff",
  };

  useEffect(() => {
    if (!sessionStorage.getItem("name") && !sessionStorage.getItem("Sname")) {
      navigate("/");
    }
  }, []);
  let MenuDetails = () => {
    if (sessionStorage.getItem("designation") == "Super") {
      return (
        <ul className="menuList">
          <li
            style={current == "Admin_Home" ? focusStyle : {}}
            onClick={() => {
              setCurrent("Admin_Home");
              navigate("/crm/admin");
            }}
          >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li
            style={current == "tasks" ? focusStyle : {}}
            onClick={() => {
              setCurrent("tasks");
              navigate("/crm/Task");
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>Tasks</span>
          </li>
          <li
            style={current == "leads" ? focusStyle : {}}
            onClick={() => {
              setCurrent("leads");
              navigate("/crm/Leads");
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            <span>Leads</span>
          </li>
          <li
            style={current == "track" ? focusStyle : {}}
            onClick={() => {
              setCurrent("track");
              navigate("/crm/TrackAgent");
            }}
          >
            <i className="fa-solid fa-address-book"></i>
            <span>Track Agent</span>
          </li>
          <li
            style={current == "agents" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agents");
              navigate("/crm/agents");
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>Sales People</span>
          </li>
          <li
            style={current == "orders" ? focusStyle : {}}
            onClick={() => {
              setCurrent("orders");
              navigate("/crm/Order");
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Orders</span>
          </li>

          <li
            style={current == "client" ? focusStyle : {}}
            onClick={() => {
              setCurrent("client");
              navigate("/crm/Client");
            }}
          >
            <i className="fa-solid fa-user"></i>
            <span>Client Details</span>
          </li>

          <li
            style={current == "invoice" ? focusStyle : {}}
            onClick={() => {
              setCurrent("invoice");
              navigate("/crm/Invoice");
            }}
          >
            <i className="fa-solid fa-phone"></i>
            <span>Invoice</span>
          </li>

          <li
            style={current == "search" ? focusStyle : {}}
            onClick={() => {
              setCurrent("search");
              navigate("/crm/SearchForAdmin");
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </li>
          <li
            style={current == "notes" ? focusStyle : {}}
            onClick={() => {
              setCurrent("notes");
              navigate("/crm/agent/allnotes");
            }}
          >
            <i class="fa-solid fa-book-open-reader"></i>
            <span>Notes</span>
          </li>
        </ul>
      );
    }
    else if (sessionStorage.getItem("designation") == "Admin") {
      return (
        <ul className="menuList">
          <li
            style={current == "SuperAdmin_Home" ? focusStyle : {}}
            onClick={() => {
              setCurrent("SuperAdmin_Home");
              navigate("/crm/superadmin");
            }}
          >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li
            style={current == "tasks" ? focusStyle : {}}
            onClick={() => {
              setCurrent("tasks");
              navigate("/crm/superadmin/Task");
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>Tasks</span>
          </li>
          <li
            style={current == "leads" ? focusStyle : {}}
            onClick={() => {
              setCurrent("leads");
              navigate("/crm/superadmin/Leads");
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            <span>Leads</span>
          </li>
          <li
            style={current == "track" ? focusStyle : {}}
            onClick={() => {
              setCurrent("track");
              navigate("/crm/superadmin/TrackAgent");
            }}
          >
            <i className="fa-solid fa-address-book"></i>
            <span>Track Agent</span>
          </li>
          <li
            style={current == "agents" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agents");
              navigate("/crm/superadmin/agents");
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>Sales People</span>
          </li>
          <li
            style={current == "orders" ? focusStyle : {}}
            onClick={() => {
              setCurrent("orders");
              navigate("/crm/superadmin/Order");
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Orders</span>
          </li>

          <li
            style={current == "client" ? focusStyle : {}}
            onClick={() => {
              setCurrent("client");
              navigate("/crm/superadmin/Client");
            }}
          >
            <i className="fa-solid fa-user"></i>
            <span>Client Details</span>
          </li>

          <li
            style={current == "invoice" ? focusStyle : {}}
            onClick={() => {
              setCurrent("invoice");
              navigate("/crm/superadmin/Invoice");
            }}
          >
            <i className="fa-solid fa-phone"></i>
            <span>Invoice</span>
          </li>

          <li
            style={current == "search" ? focusStyle : {}}
            onClick={() => {
              setCurrent("search");
              navigate("/crm/superadmin/SearchForAdmin");
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </li>
          <li
            style={current == "notes" ? focusStyle : {}}
            onClick={() => {
              setCurrent("notes");
              navigate("/crm/agent/allnotes");
            }}
          >
            <i class="fa-solid fa-book-open-reader"></i>
            <span>Notes</span>
          </li>
        </ul>
      );
    }
    else {
      return (
        <ul className="menuList">
          <li
            style={current == "agent-home" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-home");
              navigate("/crm/agent");
            }}
          >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li
            style={current == "agent-task" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-task");
              navigate("/crm/agent/Task");
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>Your Tasks</span>
          </li>
          <li
            style={current == "agent-follow" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-follow");
              navigate("/crm/agent/FollowUp");
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            <span>Follow Up</span>
          </li>{" "}
          {/* pending contact */}
          <li
            style={current == "agent-won" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-won");
              navigate("/crm/agent/Customer_won");
            }}
          >
            <i className="fa-solid fa-star"></i>
            <span>Customer/Won</span>
          </li>{" "}
          {/* success or failure contact */}
          {/* <li><i className="fa-solid fa-list-check"></i><span>Sales People</span></li> */}
          <li
            style={current == "agent-client" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-client");
              navigate("/crm/agent/Client_quotation");
            }}
          >
            <i className="fa-solid fa-user"></i>
            <span>Client Quotation</span>
          </li>
          {/* <li style={current=="agent-order"?focusStyle:{}} onClick={()=>{
             setCurrent("agent-order")
             navigate("/crm/agent/Orders")
          }}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Orders</span>
          </li> */}
          <li
            style={current == "agent-calendar" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-calendar");
              navigate("/crm/agent/Calendar");
            }}
          >
            <i className="fa-solid fa-calendar"></i>
            <span>Calender</span>
          </li>
          <li
            style={current == "agent-email" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-email");
              navigate("/crm/agent/EmailSearch");
            }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search Clients</span>
          </li>
          <li
            style={current == "agent-notes" ? focusStyle : {}}
            onClick={() => {
              setCurrent("agent-notes");
              navigate("/crm/agent/allnotes");
            }}
          >
            <i class="fa-solid fa-book-open-reader"></i>
            <span>Notes</span>
          </li>
          {/* <li><i className="fa-solid fa-list-check"></i><span>Search</span></li> */}
        </ul>
      );
    }

  };
  return (
    <div className="w-[15%] h-full bg-[#010A0F] flex flex-col gap-4">
      <div className="bg-[#0C0B0C] w-full h-16 p-2 flex  items-center justify-center border-b-[1px] border-b-gray-500">
        <img
          src={
            sessionStorage.getItem("designation") == "Admin"
              ? "/images/crmLogo.png"
              : "/images/crmLogoSale.png"
          }
          className="w-1/2"
          alt="CRM"
        />
      </div>
      {sessionStorage.getItem("name") && MenuDetails()}
    </div>
  );
}
