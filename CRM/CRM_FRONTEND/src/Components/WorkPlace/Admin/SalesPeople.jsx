import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

import { Button, message, Pagination, Table } from "antd";

import GeneralHeader from "./GeneralHeader";
import { getErrors } from "../../../Utils/ExtractError";
import AgentModal from "./AgentModal";

export default function SalesPeople({setload}) {
  const [Agents, setAgents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState(0);

  const [IsSelection, setIsSelection] = useState(false);
  //states for modal
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, seterrors] = useState({});
  const [password, setPassword] = useState("");
  const [title, settitle] = useState("");
  const [parameters, setparameters] = useState([]);
  const [ModalFunc, setModalFunc] = useState(() => {});
  const [messageApi, contextHolder] = message.useMessage();
  const fetchAgents = async (page, pageRows) => {
    // setload({
    //   spin:true,tip:"Loading"
    // })
    let url = urls.AllAgents;

    let result = await DoFetch(url + `/${page}/${pageRows}`);

    if (result.success) {
      let records = [];
      result.payload.records.forEach((e, idx) => {
        records.push({
          key: e._id,
          _id: (page - 1) * pageRows + idx + 1,
          name: e.name,
          email: e.email,
          created: e.createdAt,
          TotalTask:e.totalTasks.length,
          Tasks:e.task
        });
      });

      setAgents(records);
      setTotalData(result.payload.total);
      
    } else {
      alert("Server issue occured");
    }
    // setload({
    //   spin:false,tip:""
    // })
  };
  const AddAgent = () => {
    settitle("Add A New Agent");
    setModalFunc(() => AddNewAgent); //give refrence, dont do setModalFunc(AddNewAgent) as it invoke func automatically
    setName("");
    setEmail("");
    setPassword("");
    setOpen(true);
  };
  //operation array for selection
  const [opArr, setopArr] = useState({
    Refresh: {
      name: <i className="fa-solid fa-arrows-rotate"></i>,
      func: fetchAgents,
      parameters: [currentPage, pageSize],
      danger: false,
    },
    AddAgent: {
      name: <i className="fa-solid fa-user-plus"></i>,
      func: AddAgent,
      parameters: [],
      danger: false,
    },
  });
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "_id" },
    { key: "name", title: "Agent Name", dataIndex: "name" },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "task", title: "Tasks", dataIndex: "TotalTask"},

    {
      key: "EditId",
      title: "",
      dataIndex: "EditId",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
        );
      },
    },
    {
      key: "deleteId",
      title: "",
      dataIndex: "deleteId",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(record);
            }}
          >
           <i class="fa-solid fa-trash-can"></i>
          </Button>
        );
      },
    },

    {
      key: "created",
      title: "Joined",
      dataIndex: "created",
      render: (_, record) => {
        let date = new Date(record.created);
        // Extract day, month, and year
        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
        const year = date.getUTCFullYear();

        // Format the date as dd-mm-yyyy
        const formattedDate = `${day}-${month}-${year}`;
        return <p>{formattedDate}</p>;
      },
    },
  ];
  //Edit and Delete functions
  const handleEdit = (record) => {
    // console.log(record)
    setName(record.name);
    setEmail(record.email);
    settitle("Update An Agent");
    setparameters((prev) => {
      return [...prev, record.key];
    });
    setModalFunc(() => EditAgent);
    setOpen(true);
  };
  const handleDelete = async (records, Selected = false) => {
    let Agents = [];
    if (Selected == true) {
      Agents = records.map((agent) => {
        return agent.key;
      });
    } else {
      Agents = [records.key];
    }
    let confirmDelete = confirm(
      `Do you want to delete ${Agents.length} Agent?`
    );
    if (!confirmDelete) {
      return;
    }
    setload({
      spin:true,tip:"Deleting"
    })
    let url = urls.DeleteAgents;
    let body = JSON.stringify({
      Agents,
    });
    let extHeader = {
      "Content-Type": "application/json",
    };

    let result = await DoFetch(url, "POST", body, extHeader);
    if (result.success == true) {
      await fetchAgents(currentPage, pageSize);
      messageApi.info(Agents.length+" Agent are Deleted");
      setIsSelection(false);
    } else {
      alert("Server Side Issue");
    }
    setload({
      spin:false,tip:""
    })
  };
  //Edit Modal function
  const EditAgent = async (name, email, password, agent) => {
    seterrors([]);
    setload({
      spin:true,tip:"Editing"
    })
    let url = urls.UpdateAgent;
    let body = JSON.stringify({
      Agent: agent,
      name,
      email,
      password,
    });

    let extHeaders = {
      "Content-Type": "application/json",
    };
    let result = await DoFetch(url, "PUT", body, extHeaders);

    if (result.success == false) {
      let errorsObj = getErrors(result, ["name", "email", "password"]);
      seterrors(errorsObj);
    } else {
      await fetchAgents(currentPage, pageSize);
      setOpen(false);
      setparameters([])
    }
    setload({
      spin:false,tip:""
    })
  };

  const AddNewAgent = async (nameval, emailval, passwordval) => {
    seterrors({});
    setload({
      spin:true,tip:"Adding"
    })

    let url = urls.REGISTER;

    let body = {
      email: emailval,
      password: passwordval,
      designation: "Agent",
      name: nameval,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    let response = await fetch(url, options);
    let result = await response.json();

    if (result.success == true) {
      messageApi.info("Congrats! New Agent is Registered");
      await fetchAgents(currentPage, pageSize);
      setOpen(false);
    } else {
      let errorObj = getErrors(result, [
        "email",
        "password",
        "designation",
        "name",
      ]);
      seterrors((prev) => {
        return { ...prev, ...errorObj };
      });
      if (errorObj?.system) {
        alert(errorObj["system"]);
      }
    }
    setload({
      spin:false,tip:""
    })
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      //we can do operations like storing selected rows
    
      if (selectedRows.length == 0) {
        setIsSelection(false);
      } else {
        setIsSelection(true);
        setopArr((prev) => {
          return {
            ...prev,
            Delete: {
              name: `Delete ${selectedRows.length} Agents`,
              func: handleDelete,
              parameters: [selectedRows, true], //true means selected rows will be delete means an array is provided, not a single id variable
              danger: true,
              type: "primary",
            },
            
          };
        });
      }
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  //handle Table page change
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchAgents(pagination.current, pagination.pageSize);
  };

  useEffect(() => {
    fetchAgents(currentPage, pageSize);
  }, []);
  useEffect(() => {
    if (!IsSelection) {
      setopArr({
        Refresh: {
          name: <i className="fa-solid fa-arrows-rotate"></i>,
          func: fetchAgents,
          parameters: [currentPage, pageSize],
          danger: false,
        },
        AddAgent: {
          name: <i className="fa-solid fa-user-plus"></i>,
          func: AddAgent,
          parameters: [],
          danger: false,
        },
      });
    }
  }, [IsSelection]);
  return (
    <>
      {contextHolder}
      {/* Modal for Edit */}
      {/* <Modal
        title="Update An Agent Profile"
        open={open}
        onOk={EditAgent}
        onCancel={dropModal}
        footer={[
          <Button key="ok" onClick={EditAgent}>
            Save
          </Button>,
          <Button key="cancel" onClick={dropModal} danger type="primary">
            Cancel
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            rules={[
              { required: true, message: "Please input Agent New Name!" },
            ]}
            placeholder="Enter New Name"
            prefix={<UserOutlined />}
            className="flex gap-4 "
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.name ? errors.name : ""}
          </span>
        </div>
        <div className="mb-4">
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            rules={[
              { required: true, message: "Please input Agent New Email Id!" },
            ]}
            placeholder="Enter New Email"
            prefix={<MailOutlined />}
            className="flex gap-4 "
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.email ? errors.email : ""}
          </span>
        </div>
        <div className="mb-4">
          <Input.Password
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            rules={[{ required: true, message: "Please input a Password!" }]}
            placeholder="Enter New Password"
            prefix={<KeyOutlined />}
            className="flex gap-4 "
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md mb-2">
            {errors?.password ? errors.password : ""}
          </span>
        </div>
      </Modal> */}
      <AgentModal
        title={title}
        ClickFunc={ModalFunc}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        errors={errors}
        open={open}
        setOpen={setOpen}
        parameters={parameters}
      />
      <div className="h-calc-remaining flex flex-col justify-between ">
        <div className="h-[80%]">
          <Table locale={{ emptyText: 'No Agents available' }}
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={Agents}
            pagination={false}
            scroll={{ y: 450 }} // Ensure table content is scrollable
            onChange={handleTablePageChange}
          ></Table>
        </div>
        <div className="flex justify-between m-8">
          <GeneralHeader operations={opArr} />
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={TotalData}
            showSizeChanger={true}
            pageSizeOptions={["2", "10", "15", "20", "25", "30"]}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setCurrentPageSize(pageSize);
              fetchAgents(page, pageSize);
            }}
          />
        </div>
      </div>
    </>
  );
}
