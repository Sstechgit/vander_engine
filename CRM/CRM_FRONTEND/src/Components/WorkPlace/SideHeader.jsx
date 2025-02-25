import React, { useEffect, useState } from "react";
import { urls } from "../../../links";
import { DoFetch } from "../../Utils/DoFetch";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, Popover, Select } from "antd";
import { BellOutlined } from "@ant-design/icons";

export default function SideHeader({ setload }) {
  const [count, setcount] = useState("");
  const [designation, setdesignation] = useState(
    sessionStorage.getItem("designation") || ""
  );
  const [Sdesignation, setSdesignation] = useState(
    sessionStorage.getItem("Sdesignation") || ""
  );
  const [Staffs, setStaffs] = useState([]);
  const [content, setcontent] = useState(null);
  const navigate = useNavigate();
  let logout = async () => {
    setload({
      spin: true,
      tip: "Loading",
    });

    let url = urls.LOGOUT;
    let result = await DoFetch(url, "GET");
    console.log(result);
    if (result && result.success) {
      sessionStorage.clear();
      alert("Logout SuccessFully");
      navigate("/");
    } else {
      if (result) {
        alert(result.payload);
      } else {
        alert("Server is Down");
      }
    }
    setload({
      spin: false,
      tip: "",
    });
  };
  function getDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits for day

    return `${year}-${month}-${day}`;
  }
  const getReminder = async () => {
    const url = urls.getReminder;
    const result = await DoFetch(url, "GET");

    if (result.success == true) {
      if (result.payload.length == 0) {
        setcontent("You have no new notifications.");
        setcount("");
      } else {
        setcount(result.payload.length);
        let html = (
          <div>
            {result.payload.map((e, idx) => {
              if (e.date === getDate(new Date())) {
                //today
                return (
                  <p
                    className="flex justify-between items-end gap-8 mb-3"
                    key={idx}
                  >
                    You have {e.count} reminder(s) for Today.
                    <Button
                      onClick={() => {
                        navigate("/crm/agent/Calendar");
                      }}
                    >
                      View
                    </Button>
                  </p>
                );
              } else {
                return (
                  <p
                    className="flex justify-between items-end gap-8 mb-3"
                    key={idx}
                  >
                    You have {e.count} reminder(s) for Tommorow.
                    <Button
                      onClick={() => {
                        navigate("/crm/agent/Calendar");
                      }}
                    >
                      View
                    </Button>
                  </p>
                );
              }
            })}
          </div>
        );
        setcontent(html);
      }
    }
  };
  const getSagents = async () => {
    const url = urls.GetStaff;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("SaccessT")}`,
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.success == true) {
      let staff = result.payload.records.map((e) => {
        if (e.designation == "Admin") {
          return {
            label: `as ${e.email} (Admin)`,
            value: e.email,
          };
        } else {
          return {
            label: `as ${e.email} (Agent)`,
            value: e.email,
          };
        }
      });
      setStaffs(staff);
    }
  
  };
  const onSelectChange = async (e) => {
    if (sessionStorage.getItem("name")) {
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("accessT");
      sessionStorage.removeItem("refreshT");
      sessionStorage.removeItem("designation");
      sessionStorage.removeItem("email");
    }
    const url = urls.GetIdentity;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("SaccessT")}`,
        email: e,
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.success) {
      let accessToken = result.payload.accessToken;
      let refreshToken = result.payload.refreshToken;
      sessionStorage.setItem("accessT", accessToken);
      sessionStorage.setItem("refreshT", refreshToken);
      sessionStorage.setItem("name", result.payload.name);
      sessionStorage.setItem("designation", result.payload.designation);
      sessionStorage.setItem("email", e);
      navigate("/crm");
      window.location.reload();
    }
  };
  useEffect(() => {
    setdesignation(sessionStorage.getItem("designation"));
    setSdesignation(sessionStorage.getItem("Sdesignation"));

    if (sessionStorage.getItem("designation") === "Agent") {
      if (
        !window.location.href.includes("agent") &&
        !(window.location.pathname == "/crm")
      ) {
        alert("Only Admin Access");
        navigate("/crm");
      }
    }
    getReminder();
  }, [window.location.href]);
  useEffect(() => {
    if (Sdesignation == "super") {
      getSagents();
    }
  }, [Sdesignation]);
  return (
    <div className="w-full h-16 bg-[#2A3F54] flex items-center justify-between px-4  gap-4">
      {Sdesignation && (
        <div className="w-[50%] h-full flex px-4 items-center gap-4">
          <span className='text-white font-["Poppins"] font-bold text-xl '>
            {Sdesignation ? (Sdesignation + " Admin").toLocaleUpperCase() : ""}
          </span>
          <div className="w-10 h-10 text-white font-['Dodge'] text-2xl rounded-full bg-red-600 flex items-center justify-center">
            {sessionStorage.getItem("Sname")
              ? sessionStorage.getItem("Sname")[0]
              : ""}
          </div>
          <Select
            onChange={onSelectChange}
            className="w-[19rem]"
            placeholder="Select the Identity"
            defaultValue={sessionStorage.getItem("email")}
            options={Staffs}
          ></Select>
        </div>
      )}
      <div className="flex items-center flex-1  px-4 justify-end gap-4">
        <Popover
          className=""
          placement="topLeft"
          title="Notification"
          content={content}
        >
          <Badge count={count}>
            <Button>
              <BellOutlined />
            </Button>
          </Badge>
        </Popover>

        <span className='text-white font-["Poppins"] font-bold text-xl '>
          {designation}
        </span>
        <div className="w-10 h-10 text-white font-['Dodge'] text-2xl rounded-full bg-teal-600 flex items-center justify-center">
          {sessionStorage.getItem("name")
            ? sessionStorage.getItem("name")[0]
            : ""}
        </div>
        {sessionStorage.getItem("accessT") && (
          <button
            onClick={logout}
            className='text-md hover:bg-[#008B8B] hover:text-white font-["Poppins"] outline-none border-0 rounded-md bg-white px-2 p-1'
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
