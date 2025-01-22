import React, { useEffect, useState } from "react";

import { Button, DatePicker, Input, Modal, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { getErrors } from "../../../Utils/ExtractError";

export default function DistributeModal({
  leadArr,
  open,
  setopen,
  changeSelection,
  leadRecord = [],
  redistribute = false,
  messageApi,
  setload,
  func=null
}) {
  const [taskDescription, setTaskDescription] = useState(
    "Complete Before Deadline"
  );
  const [SelectedAgent, setSelectedAgent] = useState(["ALL"]);
  const [AllAgents, setAllAgents] = useState([]);
  const [errors, seterrors] = useState({});
  const [deadline, setDeadline] = useState("");

  const [title, setTitle] = useState(
    leadArr.length == 0
      ? "No Leads are unassigned"
      : redistribute === true
      ? "Redistribute " + leadRecord.length + " lead"
      : "Distribute " + leadArr.length + " unassigned Leads"
  );
  const dropModal = () => {
    setopen(false);
    changeSelection([]);

    setTaskDescription("Complete Before Deadline");
  };

  const fetchAgentsWithTask = async () => {
    setAllAgents([]);
    // setload({
    //   spin:true,tip:"Loading"
    // })

    let url = urls.AllAgentsWithoutPage;

    let result = await DoFetch(url);

    if (result.success) {
      let options = [{ label: "ALL", value: "ALL" }];
      result.payload.forEach((e, idx) => {
        options.push({
          label: e.email + " " + e.totalTasks,
          value: e._id,
        });
      });
   
      setAllAgents(options);
    } else {
      alert("Server issue occured");
    }
    // setload({
    //   spin:false,tip:""
    // })
  };
  const handleChange = (value) => {
    setSelectedAgent(value);
  
  };
  const handleDate = (value) => {

    setDeadline(value.$d);
  };
  //distribute
  const handleDistribute = async () => {
    seterrors([]);
    if (deadline === "") {
      seterrors({ deadline: "Please Provide Deadline" });
      return;
    }
    let all = false;
    SelectedAgent.forEach((agent) => {
      if (agent === "ALL") {
        all = true;
        return;
      }
    });
    let agentsId = [];
    if (all) {
      AllAgents.forEach((agent) => {
        if (agent.label != "ALL") {
          agentsId.push(agent.value);
        }
      });
    }
  
  
    let result;
    if (redistribute === false) {
      // setload({
      //   spin:true,tip:"Loading"
      // })
  
      let url = urls.Distribute;

      let body = JSON.stringify({
        leads: leadArr,
        agents: all === true ? agentsId : SelectedAgent,
        deadline,
      });

      let extHeaders = {
        "Content-Type": "application/json",
      };
       result = await DoFetch(url, "POST", body, extHeaders);
    }
    else{
      let url = urls.Redistribute;

      let body = JSON.stringify({
        tasksArr: [leadRecord[0].task._id],
        agents: all === true ? agentsId : SelectedAgent,
        deadline,
      });

      let extHeaders = {
        "Content-Type": "application/json",
      };
       result = await DoFetch(url, "PUT", body, extHeaders);
       
    }

    if (result.success == false) {
      let errorsObj = getErrors(result, ["leads","tasks", "agents", "deadline"]);
      seterrors(errorsObj);
    } else {
      messageApi.info(`${leadArr.length} Lead are distributed`);
      setSelectedAgent([]);
      setDeadline("");
      changeSelection([]);
      setopen(false);
    
    }
    // setload({
    //   spin:false,tip:""
    // })
  };
  const dofunc=()=>{
    if(func){
      

       func(SelectedAgent,AllAgents,leadRecord,deadline,redistribute,seterrors)
       setSelectedAgent([]);
      setDeadline("");
      changeSelection([]);
      setopen(false);
    }
  }
  useEffect(() => {
    fetchAgentsWithTask();
  }, []);

  return (
    <Modal
      title={title}
      open={open}
      onCancel={dropModal}
      footer={[
        <Button key="save" onClick={func!=null?dofunc:handleDistribute}>
          {redistribute===false?"Distribute":"Redistribute"}
        </Button>,
        <Button key="cancel" onClick={dropModal} danger type="primary">
          Cancel
        </Button>,
      ]}
    >
      <div className="mb-4">
        <Input
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          rules={[{ required: true, message: "Please Enter a Description" }]}
          placeholder="Enter New Name"
          prefix={<UserOutlined />}
          className="flex gap-4 "
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
          {errors?.TaskDescription ? errors.TaskDescription : ""}
        </span>
      </div>

      <div className="mb-4">
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          defaultValue={["ALL"]}
          onChange={handleChange}
          options={AllAgents}
        />
      </div>
      <div className="mb-4">
        <DatePicker
          onChange={handleDate}
          style={{
            width: "100%",
          }}
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
          {errors?.deadline ? errors.deadline : ""}
        </span>
      </div>
    </Modal>
  );
}
