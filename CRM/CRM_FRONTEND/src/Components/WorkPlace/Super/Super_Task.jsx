import { Pagination, Table, Button, message } from "antd";

import React, { useEffect, useMemo, useState } from "react";
import GeneralHeader from "./GeneralHeader.jsx";
import { urls } from "../../../../links.js";
import { DoFetch } from "../../../Utils/DoFetch.js";
import LeadModal from "./LeadModal.jsx";
import { getErrors } from "../../../Utils/ExtractError.js";
import {
  formatDate,
  parseCustomDate,
} from "../../../Utils/parseAndFormatDate.jsx";
import LeadTaskRelation from "./UtilComp/LeadTaskRelation.jsx";
import DistributeModal from "./DistributeModal.jsx";
export default function Super_Task({ setload }) {
  //states for lead info modal
  const [open, setOpen] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, settitle] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [parameters, setParameters] = useState([]);
  const [ModalFunc, setModalFunc] = useState(() => {});
  const [errors, seterrors] = useState({});
  const [Leads, setLeads] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  //states for lead distribution
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [selectedLeadRecord, setselectedLeadRecord] = useState([]);
  const [OpenDistribute, setOpenDistribute] = useState(false);
  const [redistribute, setredistribute] = useState(false);
  //states for selection
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState(0);

  const [opArr, setopArr] = useState({
    // Refresh: {
    //   name: <i className="fa-solid fa-arrows-rotate"></i>,
    //   func: fetchTask,
    //   parameters: [currentPage, pageSize],
    //   danger: false,
    // },
    // AddAgent: {
    //   name: <i className="fa-solid fa-user-plus"></i>,
    //   func: AddAgent,
    //   parameters: [],
    //   danger: false,
    // },
  });
  //fetch Leads
  const fetchTask = async (page, pageRows) => {
 

    let url = urls.FetchTask + `/${page}/${pageRows}`;
   
    let result = await DoFetch(url);


    if (result?.success == true) {
      let records = [];

      result.payload.records.forEach((task, idx) => {
        records.push({
          key: task._id,
          _id: (page - 1) * pageRows + idx + 1,
          name: task.lead[0].name,
          email: task.lead[0].email,
          phone: task.lead[0].phone,
          description: task.lead[0].description,
          origin: task.lead[0]?.origin,
          created: parseCustomDate(task.lead[0]?.createdAt),
          assigned: true,
          agent: task.user[0],
          agentEmail: task.user[0].email,
          status: task.state,
        });
      });

      setLeads(records);
      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
    }
 
  };
 //Delete a task
 const handleDelete = async (record) => {
  let confirmDelete = confirm(
    `Do you want to delete Task?`
  );
  if (!confirmDelete) {
    return;
  }
  setload({
    spin: true,
    tip: "Deleting",
  });
  let url = urls.deleteTask;
 
  let extHeader = {
    "Content-Type": "application/json",
    "taskId":record.key
  };

  let result = await DoFetch(url, "DELETE", null, extHeader);

  if (result.success == true) {
    await fetchTask(currentPage, pageSize);
    messageApi.info("1 Task is deleted");
    setSelectedLeads([]);
  } else {
    alert("Server Side Issue");
  }
  setload({
    spin: false,
    tip: "",
  });
};

  //Add A Lead
  const AddLead = async (
    nameval,
    emailval,
    descriptionval,
    originval,
    phoneval
  ) => {
    seterrors({});
    setload({
      spin: true,
      tip: "Adding",
    });

    let url = urls.AddLead;

    let body = {
      email: emailval,
      name: nameval,
      description: descriptionval,
      origin: originval,
      phone: phoneval,
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
      messageApi.info("Congrats! New Lead is Added");
      await fetchTask(currentPage, pageSize);
      setOpen(false);
    } else {
      let errorObj = getErrors(result, [
        "email",
        "password",
        "description",
        "origin",
        "phone",
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
      spin: false,
      tip: "",
    });
  };
  const EditLead = async (name, email, description, origin, phone, leadId) => {
    seterrors([]);
    setload({
      spin: true,
      tip: "Editing",
    });

    let url = urls.EditLead;
    let body = JSON.stringify({
      LeadId: leadId,
      name,
      email,
      description,
      origin,
      phone,
    });

    let extHeaders = {
      "Content-Type": "application/json",
    };
    let result = await DoFetch(url, "PUT", body, extHeaders);

    if (result.success == false) {
      let errorsObj = getErrors(result, [
        "email",
        "password",
        "description",
        "origin",
        "phone",
        "name",
      ]);
      seterrors(errorsObj);
    } else {
      await fetchTask(currentPage, pageSize);
      setParameters([]);
      setOpen(false);
    }
    setload({
      spin: false,
      tip: "",
    });
  };
  const AddandEditLead = (record) => {
    setParameters([]);
    settitle(record ? "Update A Lead" : "Add a Lead");
    setName(record?.name || "");
    setEmail(record?.email || "");
    setPhone(record?.phone || "");
    setDescription(record?.description || "");
    setOrigin(record?.origin || "Vander Engines");

    setParameters((prev) => {
      return [...prev, record?.key];
    });
    setModalFunc(() => {
      return record ? EditLead : AddLead;
    });
    setOpen(true);
  };
  const DistributeAll = (records, changeSelection) => {
    let notAssignedFromSelection = [];
    records.forEach((lead) => {
      if (lead.assigned === false) {
        notAssignedFromSelection.push(lead.key);
      }
    });
  
    setSelectedLeads(notAssignedFromSelection);
    setOpenDistribute(true);
  };

  //header for table
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "_id", width: 80 },
    { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
    {
      key: "lead_email",
      title: "Client Email",
      dataIndex: "email",
      width: 130,
    },
    {
      key: "lead_phone",
      title: "Client Contact",
      dataIndex: "phone",
      width: 130,
      render: (_, record) => {
        return <a href={`tel:${record.phone}`}>{record.phone}</a>;
      },
    },
    {
      key: "lead_description",
      title: "Description",
      dataIndex: "description",
      width: 200,
    },
    {
      key: "Status",
      title: "status",
      dataIndex: "status",
      width: 200,
    },
    { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
    {
      key: "Agent",
      title: "Agent",
      dataIndex: "agentEmail",
      width: 160,
    },

    {
      key: "created",
      title: "Generated",
      dataIndex: "created",
      width: 150,
      sorter: (a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);

        // Handle invalid dates
        if (isNaN(dateA.getTime())) return 1; // Treat invalid dates as later
        if (isNaN(dateB.getTime())) return -1; // Treat invalid dates as earlier

        return dateA - dateB;
      },
      render: (_, record) => {
        let formattedDate = formatDate(record.created);
        return <p>{formattedDate}</p>;
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
            style={{ width: "2rem" }}
            onClick={() => {
              handleDelete(record);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        );
      },
    },
  ];

  // const rowSelection = {
  //   selectedRowKeys: selectedLeads,
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     //we can do operations like storing selected rows
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //     if (selectedRows.length == 0) {
  //       setselectedLeadRecord([]);
  //       setSelectedLeads([]);
  //     }
  //   },
  // };
  //handle Table page change
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };
  useEffect(() => {
    if (selectedLeads.length === 0) {
      setopArr({
        Refresh: {
          name: (
            <p>
              <i className="fa-solid fa-arrows-rotate"></i> Show All
            </p>
          ),
          func: fetchTask,
          parameters: [currentPage, pageSize],
          danger: false,
        },
        AddLead: {
          name: <i className="fa-solid fa-file-circle-plus"></i>,
          func: AddandEditLead,
          parameters: [],
          danger: false,
        },
      });
    }
  }, [selectedLeads]);

  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchTask(currentPage, pageSize);

    let id = setInterval(() => {
      fetchTask(currentPage, pageSize);
    }, 12000);
    return () => {
      clearInterval(id);
    };
  }, [currentPage, pageSize]);
  return (
    <>
      {contextHolder}
      {OpenDistribute && (
        <DistributeModal
          open={OpenDistribute}
          setopen={setOpenDistribute}
          leadArr={selectedLeads}
          messageApi={messageApi}
          redistribute={redistribute}
          leadRecord={selectedLeadRecord}
          changeSelection={setSelectedLeads}
        />
      )}
      <LeadModal
        title={title}
        ClickFunc={ModalFunc}
        email={email}
        setEmail={setEmail}
        name={Name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        origin={origin}
        setOrigin={setOrigin}
        description={description}
        setDescription={setDescription}
        errors={errors}
        open={open}
        setOpen={setOpen}
        parameters={parameters}
      />
      <div className="h-calc-remaining flex flex-col justify-between ">
        <div className="h-[80%]">
          <Table locale={{ emptyText: 'No Tasks available' }}
            style={{ maxWidth: "100%" }}
            // rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={Leads}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: TotalData,
              showSizeChanger: true,
              pageSizeOptions: ["2", "10", "15", "20", "25", "30"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentPageSize(pageSize);
                fetchTask(page, pageSize);
              },
            }}
            scroll={{ y: 420, x: "max-content" }} // Ensure table content is scrollable
            onChange={handleTablePageChange}
          ></Table>
        </div>
        <div className="flex justify-between m-8">
          <GeneralHeader operations={opArr} />
        </div>
      </div>
    </>
  );
}
