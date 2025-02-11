import { Pagination, Table, Button, message, DatePicker } from "antd";

import * as XLSX from "xlsx"; // Import XLSX for Excel generation
import { saveAs } from "file-saver"; // Save file in browser

import React, { useCallback, useEffect, useMemo, useState } from "react";
import GeneralHeader from "./GeneralHeader";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch.js";
import LeadModal from "./LeadModal.jsx";
import { getErrors } from "../../../Utils/ExtractError.js";
import {
  formatDate,
  parseCustomDate,
} from "../../../Utils/parseAndFormatDate.jsx";
import LeadTaskRelation from "./UtilComp/LeadTaskRelation.jsx";
import DistributeModal from "./DistributeModal.jsx";

export default function Lead({ setload }) {
  //states for lead info modal
  const [open, setOpen] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, settitle] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [parameters, setParameters] = useState([]);
  const [ModalFunc, setModalFunc] = useState(() => { });
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
  const [pageSize, setCurrentPageSize] = useState(300);
  const [TotalData, setTotalData] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date
  const [mobileFilter, setMobileFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const filterTasks = (selectedDate, mobileFilter,nameFilter,emailFilter, tasks) => {
    return tasks.filter((task) => {
      const taskCreatedDate = new Date(task.created).toLocaleDateString();
      const selectedDateString = selectedDate?.toLocaleDateString();

      // Check date condition
      const isDateMatch =
        !selectedDate || taskCreatedDate === selectedDateString;

      // Check mobile number condition
      const isMobileMatch = !mobileFilter || task.phone.includes(mobileFilter);

      const isNameMatch = !nameFilter || task.name.toLowerCase().includes(nameFilter.toLowerCase());

       // Check Name number condition
       const isEmailMatch = !emailFilter || task.email.toLowerCase().includes(emailFilter.toLowerCase());

      return isDateMatch && isMobileMatch && isNameMatch && isEmailMatch;
    });
  };
  const [opArr, setopArr] = useState({
    // Refresh: {
    //   name: <i className="fa-solid fa-arrows-rotate"></i>,
    //   func: fetchLeads,
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
  const fetchLeads = async (page, pageRows) => {
    let url = urls.FetchLeads + `/${page}/${pageRows}`;
    let result = await DoFetch(url);
  
    if (result.success) {
      let records = result.payload.records.map((lead, idx) => ({
        key: lead._id,
        _id: (page - 1) * pageRows + idx + 1,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        description: lead.description,
        origin: lead?.origin,
        created: parseCustomDate(lead?.createdAt),
        assigned: lead.task[0]?._id ? true : false,
        agent: lead.user[0],
        task: lead.task[0],
      }));
  
      // Apply filter for "Vander Engines"
      let filteredLeads = records.filter(lead => lead?.origin?.toLowerCase() === "Vander Engines Transmissions".toLocaleLowerCase());
  
      // Apply other filters if needed
      const finalFilteredLeads = filterTasks(selectedDate, mobileFilter, nameFilter, emailFilter, filteredLeads);
      
      setLeads(finalFilteredLeads); // Set the filtered leads
      setTotalData(result.payload.total);
    } else {
      alert("Server issue occurred");
    }
  };
  
  //Delete a lead
  const handleDelete = async (records, Selected = false) => {
    let leadArr = [];
    if (Selected == true) {
      leadArr = records.map((lead) => {
        return lead.key;
      });
    } else {
      leadArr = [records.key];
    }
    let confirmDelete = confirm(
      `Do you want to delete ${leadArr.length} Lead with associated Tasks(If)?`
    );
    if (!confirmDelete) {
      return;
    }
    // setload({
    //   spin:true,tip:"Deleting"
    // })

    let url = urls.DeleteLeads;
    let body = JSON.stringify({
      Leads: leadArr,
    });
    let extHeader = {
      "Content-Type": "application/json",
    };

    let result = await DoFetch(url, "POST", body, extHeader);

    if (result.success == true) {
      await fetchLeads(currentPage, pageSize);
      messageApi.info(leadArr.length + " Lead Deleted");
      setSelectedLeads([]);
    } else {
      alert("Server Side Issue");
    }
    // setload({
    //   spin:false,tip:""
    // })
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

    // setload({
    //   spin:true,tip:"Adding"
    // })

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
      await fetchLeads(currentPage, pageSize);
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
    // setload({
    //   spin:false,tip:""
    // })
  };
  const EditLead = async (name, email, description, origin, phone, leadId) => {
    seterrors([]);
    // setload({
    //   spin:true,tip:"Editing"
    // })

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
      await fetchLeads(currentPage, pageSize);
      setParameters([]);
      setOpen(false);
    }
    // setload({
    //   spin:false,tip:""
    // })
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

  const exportToExcel = (exportSelected = false) => {
    let dataToExport = exportSelected ? selectedLeadRecord : Leads;
    if (dataToExport.length === 0) {
      alert("No leads available to export!");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(dataToExport); // Convert JSON to sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    // Convert to Excel file and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, `leads_${exportSelected ? "selected" : "all"}.xlsx`);
  };


  //header for table
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "_id", width: 100 },
    { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
    {
      key: "lead_email",
      title: "Client Email",
      dataIndex: "email",
      width: 100,
    },
    {
      key: "lead_phone",
      title: "Client Contact",
      dataIndex: "phone",
      width: 100,
      render: (_, record) => {
        return (
          <a href={`tel:${record.phone}`} className="flex gap-2 items-center">
            <i className="fa-solid fa-phone"></i>
            {record.phone}
          </a>
        );
      },
    },
    {
      key: "lead_description",
      title: "Description",
      dataIndex: "description",
      width: 200,
    },
    { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
    {
      key: "Task",
      title: "Task",
      dataIndex: "Task",
      width: 160,
      filters: [
        { text: "Assigned", value: true },
        { text: "Not Assigned", value: false },
      ],
      onFilter: (value, record) => record.assigned === value,
      render: (_, record) => {
        return (
          <LeadTaskRelation
            selectLead={setSelectedLeads}
            leadRecord={setselectedLeadRecord}
            setredistribute={setredistribute}
            record={record}
            assigned={record.assigned}
            openModal={() => setOpenDistribute(true)}
          />
        );
      },
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
      key: "EditId",
      title: "",
      dataIndex: "EditId",
      render: (_, record) => {
        return (
          <Button
            type="primary"
            style={{ width: "2rem" }}
            onClick={() => {
              AddandEditLead(record);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
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

  const rowSelection = {
    selectedRowKeys: selectedLeads,
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length == 0) {
        setselectedLeadRecord([]);
        setSelectedLeads([]);
      } else {
        setSelectedLeads(selectedRowKeys);
        setselectedLeadRecord(selectedRows);
        setopArr((prev) => {
          return {
            ...prev,
            Delete: {
              name: `Delete ${selectedRows.length} Leads`,
              func: handleDelete,
              parameters: [selectedRows, true], //true means selected rows will be delete means an array is provided, not a single id variable
              danger: true,
              type: "primary",
            },
            Distribute: {
              name: `Distribute`,
              func: DistributeAll,
              parameters: [selectedRows],
              danger: false,
              type: "primary",
            },
          };
        });
      }
    },
  };
  //handle Table page change
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchLeads(pagination.current, pagination.pageSize);
  };
  useEffect(() => {
    setopArr((prev) => ({
      ...prev,
      Refresh: {
        name: (
          <p>
            <i className="fa-solid fa-arrows-rotate"></i> Show All
          </p>
        ),
        func: fetchLeads,
        parameters: [currentPage, pageSize],
        danger: false,
      },
      AddLead: {
        name: (
          <p>
            <i className="fa-solid fa-file-circle-plus"></i> Add a Lead
          </p>
        ),
        func: AddandEditLead,
        parameters: [],
        danger: false,
      },
      ExportAll: {
        name: (
          <p>
            <i className="fa-solid fa-file-export"></i> Export All
          </p>
        ),
        func: () => exportToExcel(false), // Use arrow function to ensure correct execution
        parameters: [],
        danger: false,
      },
      ExportSelected: {
        name: (
          <p>
            <i className="fa-solid fa-file-export"></i> Export Selected
          </p>
        ),
        func: () => exportToExcel(true), // Use arrow function
        parameters: [],
        danger: false,
      },
    }));
  }, [selectedLeads, Leads]); // Ensure Leads is included


  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchLeads(currentPage, pageSize);

    let id = setInterval(() => {
      fetchLeads(currentPage, pageSize);
    }, 12000);
    return () => {
      clearInterval(id);
    };
  }, [currentPage, pageSize, selectedDate, mobileFilter,nameFilter,emailFilter]);
  return (
    <>
      {contextHolder}
      {OpenDistribute && (
        <DistributeModal
          setload={setload}
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
      <div className="w-full border px-3 py-1">
        <DatePicker
          className="w-[30%] me-5 border rounded border-gray-500 p-1"
          onChange={(date, dateString) =>
            setSelectedDate(date ? new Date(dateString) : null)
          }
        />
        <span className="w-[20%] me-5 border rounded border-gray-500 p-1">
          <input
            type="text "
            placeholder="Search By Name "
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="ms-5 mobile-filter-input"
          />
          <i
            class="fa-solid fa-magnifying-glass  mt-2"
            onClick={filterTasks}
          ></i>
        </span>
        <span className="w-[20%] me-5 border rounded border-gray-500 p-1">
          <input
            type="email "
            placeholder="Search By Email "
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
            className="ms-5 mobile-filter-input"
          />
          <i
            class="fa-solid fa-magnifying-glass  mt-2"
            onClick={filterTasks}
          ></i>
        </span>
        <span className="w-[20%] me-5 border rounded border-gray-500 p-1">
          <input
            type="text "
            placeholder="Search By Mobile No. "
            value={mobileFilter}
            onChange={(e) => setMobileFilter(e.target.value)}
            className="ms-5 mobile-filter-input"
          />
          <i
            class="fa-solid fa-magnifying-glass  mt-2"
            onClick={filterTasks}
          ></i>
        </span>

      </div>

      <div className="h-calc-remaining flex flex-col justify-between  ">
        <div className="h-[80%]">
          <Table
            locale={{ emptyText: "No Leads available" }}
            style={{ maxWidth: "100%" }}
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={Leads}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: TotalData,
              showSizeChanger: true,
              pageSizeOptions: ["300", "500", "700", "900", "1000", "1200"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentPageSize(pageSize);
                fetchLeads(page, pageSize);
              },
            }}
            scroll={{ y: 400, x: "max-content" }} // Ensure table content is scrollable
            onChange={handleTablePageChange}
          ></Table>
        </div>
        <div className="flex justify-between m-8">
          <GeneralHeader operations={opArr} />
        </div>

      </div>
      <style>
        {`
        input:focus,input:active,input:focus-visible,input:target{
          box-shadow: none !important;
          outline: none !important;
        }
       input:active{
       box-shadow:none;
       }
       
       `}
      </style>
    </>
  );
}
