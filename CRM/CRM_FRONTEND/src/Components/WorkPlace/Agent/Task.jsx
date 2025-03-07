import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";
import { Button, DatePicker, Modal, Select, Table, message } from "antd";
const { RangePicker } = DatePicker;
import GeneralHeader from "../Admin/GeneralHeader";
import Status from "./Status";
import DescriptionModel from "./DescriptionModel";
import Searcher from "./Searcher";
import AddNote from "./utilComp/AddNote";
import ViewNote from "./ViewNote";
import { useNavigate } from "react-router-dom";
import AddFollow from "./AddFollow";
import EmailConversation from "./EmailConversation";
import YardnameSearch from "./YardnameSearch";
import TextArea from "antd/es/input/TextArea";
import SendMessages from "./SendMessages";
import ShowInvoice from "./utilComp/ShowInvoice";
import LeadModal from "../Admin/LeadModal";
import AgentAddLead from "./AgentAddLead";
import Send_Quotation from "./Send_Quotation";
import View_Quotation from "./View_Quotation";

export default function Task({ setload }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(50);
  const navigate = useNavigate();
  const [task, settask] = useState([]);
  const [TotalData, setTotalData] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date
  const [mobileFilter, setMobileFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [open, setOpen] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, settitle] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [parameters, setParameters] = useState([]);
  const [errors, seterrors] = useState({});
  const [Leads, setLeads] = useState([]);
  const [ModalFunc, setModalFunc] = useState(() => { });
  const [messageApi, contextHolder] = message.useMessage();
  const [deadline, setDeadline] = useState("");
  const [dateRange, setDateRange] = useState(null);
    const [totalLeads, setTotalLeads] = useState(0);
    const [filteredLeadsCount, setFilteredLeadsCount] = useState(0);
  // Function to filter tasks based on the selected date
  const filterTasks = (dateRange, mobileFilter, nameFilter, emailFilter, statusFilter, tasks) => {
    return tasks.filter((task) => {
      const taskCreatedDate = new Date(task.createdLead);
      const startDate = dateRange?.[0] ? new Date(dateRange[0] + "T00:00:00") : null;
      const endDate = dateRange?.[1] ? new Date(dateRange[1] + "T23:59:59") : null;

      
      // Check date condition
      const isDateMatch =
        (!startDate || taskCreatedDate >= startDate) &&
        (!endDate || taskCreatedDate <= endDate);


      // Check mobile number condition
      const isMobileMatch = !mobileFilter || task.phone.includes(mobileFilter);

      const isNameMatch = !nameFilter || task.name.toLowerCase().includes(nameFilter.toLowerCase());

      // Check Name number condition
      const isEmailMatch = !emailFilter || task.email.toLowerCase().includes(emailFilter.toLowerCase());

      const isStatusMatch = !statusFilter || task.status.toLowerCase().includes(statusFilter.toLowerCase());

      return isDateMatch && isMobileMatch && isNameMatch && isEmailMatch && isStatusMatch;

    });
  };
  const fetchTask = async () => {
    try {
      let page = 1;
      let pageRows = 100; // Adjust to your API's max rows per page
      let allRecords = [];
      let totalRecords = 0;
  
      do {
        let url = urls.GetTaskForAgent + `/${page}/${pageRows}`;
        let result = await DoFetch(url);
  console.log(result)
        if (!result.success) {
          alert("Server issue occurred");
          return;
        }
  
        if (page === 1) {
          totalRecords = result.payload.total;
        }
  
        const pageRecords = result.payload.records.map((taskval, idx) => {
          if (!taskval?.orders) {
            return {
              key: taskval._id,
              leadId: taskval.leads[0]._id,
              _id: (page - 1) * pageRows + idx + 1,
              name: taskval.leads[0].name,
              email: taskval.leads[0].email,
              phone: taskval.leads[0].phone,
              description: taskval.leads[0].description,
              origin: taskval.leads[0]?.origin,
              deadline: parseCustomDate(taskval.deadline),
              order: false,
              createdLead: parseCustomDate(taskval.leads[0]?.createdAt),
              TaskAssignedDate: parseCustomDate(taskval.createdAt),
              status: taskval.state,
              type: "leads",
              yard: taskval.yard,
              invoice: taskval.invoice,
              invoiceSaved: taskval.invoiceSaved,
            };
          } else {
            return {
              key: taskval._id,
              orderId: taskval.orders[0]._id,
              _id: (page - 1) * pageRows + idx + 1,
              name: taskval.orders[0].name,
              email: taskval.orders[0].email,
              phone: taskval.orders[0].phone,
              description: taskval.orders[0].description + " " + taskval.orders[0].part,
              origin: taskval.orders[0]?.origin,
              order: true,
              part: taskval.orders[0].part,
              deadline: parseCustomDate(taskval.deadline),
              createdLead: parseCustomDate(taskval.orders[0]?.date),
              TaskAssignedDate: parseCustomDate(taskval.createdAt),
              status: taskval.state,
              // additional
              cvv: taskval.orders[0].CVV,
              amount: taskval.orders[0].amount,
              billing_address: taskval.orders[0].billing_address,
              shipping_address: taskval.orders[0].shipping_address,
              card_no: taskval.orders[0].card_no,
              expiry_date: taskval.orders[0].expiry_date,
              type: "orders",
              yard: taskval.yard,
            };
          }
        });
  
        allRecords = [...allRecords, ...pageRecords];
        page++;
      } while (allRecords.length < totalRecords);
  
      setTotalLeads(allRecords.length);
  
      // Filter tasks by the selected date if any
      const filteredTasks = filterTasks(dateRange, mobileFilter, nameFilter, emailFilter, statusFilter, allRecords);
      settask(filteredTasks); // Set the filtered tasks
      setTotalData(totalRecords);
      setFilteredLeadsCount(filteredTasks.length);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };
  
  const [leadId, setLeadId] = useState(null);
  const AddLead = async (nameval, emailval, descriptionval, originval, phoneval, deadlineval) => {
    seterrors({});

    let url = urls.AddLead;

    let body = {
      email: emailval,
      name: nameval,
      description: descriptionval,
      origin: originval,
      phone: phoneval,
      deadline: deadlineval,
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

    console.log("Response from AddLead API:", result);

    if (result.success === true) {
      messageApi.info("Congrats! New Lead is Added");

      let newLeadId = result.payload.leadId;
      console.log("Retrieved leadId:", newLeadId);

      setLeadId(newLeadId); // Store in state

      let agentId = localStorage.getItem("userId"); // Retrieve agentId

      // Call AddTask API
      await AddTask(newLeadId, agentId, deadlineval);

      setOpen(false);
    } else {
      let errorObj = getErrors(result, ["email", "password", "description", "origin", "phone", "name", "deadline"]);
      seterrors((prev) => ({ ...prev, ...errorObj }));

      if (errorObj?.system) {
        alert(errorObj["system"]);
      }
    }
  };

  const AddTask = async (leadId, agentId, deadline) => {
    let url = urls.ADDTASK;

    let body = {
      leadId: leadId,
      agentId: agentId,
      deadline: deadline,
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

    console.log("Response from AddTask API:", result);

    if (result.success === true) {
      messageApi.info("Task successfully assigned to the agent");
    } else {
      console.error("Error adding task:", result);
    }
  };


  const [opArr, setopArr] = useState({})
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
  useEffect(() => {
    // if (selectedLeads.length === 0)
    {
      setopArr({
        // Refresh: {
        //   name: (
        //     <p>
        //       <i className="fa-solid fa-arrows-rotate"></i> Show All
        //     </p>
        //   ),
        //   func: fetchLeads,
        //   parameters: [currentPage, pageSize],
        //   danger: false,
        // },
        AddLead: {
          name: <p><i className="fa-solid fa-file-circle-plus"></i> Add a Lead</p>,
          func: AddandEditLead,
          parameters: [],
          danger: false,
        },
      });
    }
  },);


  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 140,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // render: () => {
      //   return <span>abc@gmail.com</span>;
      // },
      render: (_, record) => {
        return (record.email.slice(0, 3) + ".....@gmail.com");
      },
    },

    {
      title: "Send Email",
      dataIndex: "",
      key: "send email",
      width: 120,
      render: (_, record) => {
        return <EmailConversation record={record} setload={setload} />;
      },
    },
    {
      title: "Send Via RingCentral",
      dataIndex: "",
      key: "send msg",
      width: 140,
      render: (_, record) => {
        return <SendMessages record={record} />;
      },
    },
    {
      title: "Send Invoice To Admin",
      dataIndex: "",
      key: "send invoice",
      width: 180,
      render: (_, record) => {
        return <ShowInvoice record={record} fetchTask={fetchTask} />;
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 120,
      render: (_, record) => {
        return (
          <a href={`tel:${record.phone}`} className="flex gap-2 items-center">
            <i className="fa-solid fa-phone"></i>
            {record.phone.slice(0, 5) + "xxxxx..."}
          </a>
        );
      },
    },

    {
      title: "Info",
      dataIndex: "description",
      key: "description",
      // render: (_, record) => {
      //   return <DescriptionModel record={record} />;
      // },
    },
    {
      key: "Search",
      title: "",
      render: (_, record) => {
        return <Searcher record={record} setload={setload} />;
      },
    },
    {
      title: "Yard Names",
      dataIndex: "yard",
      key: "yard",
      render: (_, record) => {
        return <YardnameSearch record={record} fetchTask={fetchTask} />;
      },
    },
    {
      title: "Send Quotation",
      dataIndex: "send_quotation",
      key: "send_quotation",
      width: 180,
      render: (_, record) => {
        return <Send_Quotation record={record} />;
      },
    }, {
      title: "View Quotation",
      dataIndex: "view_quotation",
      key: "view_quotation",
      width: 180,
      render: (_, record) => {
        return <View_Quotation record={record} />;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return <Status record={record} setload={setload} />;
      },
    },
    {
      title: "Follow Up",
      dataIndex: "follow",
      key: "follow",
      width: 100,
      render: (_, record) => {
        return <AddFollow record={record} setload={setload} />;
      },
    },
    {
      title: "Type",
      dataIndex: "order",
      key: "order",
      width: 60,
      render: (_, record) => {
        return <p>{record.order ? "Order" : "Lead"}</p>;
      },
      filters: [
        { text: "Order", value: true },
        { text: "Lead", value: false },
      ],
      onFilter: (value, record) => record.order === value,
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "Add Note",
      dataIndex: "datepicker",
      key: "datepicker",
      width: 220,
      render: (_, record) => {
        return <AddNote record={record} />;
      },
    },
    {
      title: "Your Notes",
      dataIndex: "viewnote",
      key: "viewnote",
      width: 110,
      render: (_, record) => {
        return <ViewNote record={record} setload={setload} />;
      },
    },

    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
      width: 150,
      sorter: (a, b) => {
        const dateA = new Date(a.deadline);
        const dateB = new Date(b.deadline);

        // Handle invalid dates
        if (isNaN(dateA.getTime())) return 1; // Treat invalid dates as later
        if (isNaN(dateB.getTime())) return -1; // Treat invalid dates as earlier

        return dateA - dateB;
      },
      render: (_, record) => {
        let formattedDate = formatDate(record.deadline);
        return <p>{formattedDate}</p>;
      },
    },
    {
      title: "Created Lead",
      dataIndex: "createdLead",
      key: "createdLead",
      width: 150,
      sorter: (a, b) => new Date(a.createdLead) - new Date(b.createdLead),
      render: (_, record) => <p>{formatDate(record.createdLead)}</p>,
    },
    {
      title: "Task Assigned Date",
      dataIndex: "TaskAssignedDate",
      key: "TaskAssignedDate",
      width: 180,
      sorter: (a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);

        // Handle invalid dates
        if (isNaN(dateA.getTime())) return 1; // Treat invalid dates as later
        if (isNaN(dateB.getTime())) return -1; // Treat invalid dates as earlier

        return dateA - dateB;
      },
      render: (_, record) => {
        let formattedDate = formatDate(record.TaskAssignedDate);
        return <p>{formattedDate}</p>;
      },
    },
  ];
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };

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
  }, [currentPage, pageSize, dateRange, mobileFilter, nameFilter, emailFilter, statusFilter]);
  const statusOptions = [
    { value: "", label: "Select status" }, // Default option
    { value: "Pending", label: "Pending" },
    { value: "Refund", label: "Refund" },
    { value: "Failed", label: "Failed" },
    { value: "Not Interested", label: "Not Interested" },
    { value: "Voice Mail", label: "Voice Mail" },
    { value: "Already Purchased", label: "Already Purchased" },
    { value: "Sale", label: "Sale" },
    { value: "Hot Lead", label: "Hot Lead" },
    { value: "Exchange", label: "Exchange" },
    { value: "No Response", label: "No Response" },
    { value: "Quotation Given", label: "Quotation Given" },
  ];
  return (
    <>
      {contextHolder}
      <AgentAddLead
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
        Deadline={deadline}
        setdeadline={setDeadline}
      />
      {/* DatePicker for selecting the filter date */}
      <div className="w-full border px-3 py-1">
      <RangePicker
          className="w-[30%] me-4 border rounded border-gray-500 p-1"
          onChange={(dates, dateStrings) =>
            setDateRange(dates ? [dateStrings[0], dateStrings[1]] : null)
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
        <Select
          options={statusOptions}
          value={statusFilter}
          onChange={(value) => setStatusFilter(value)} // value is passed directly
          style={{ width: "120px" }}
        />
          <span className="bg-green-700 p-1 border rounded-3xl text-white fw-bold text-xl">{filteredLeadsCount}</span>
      </div>
      <div className="h-calc-remaining flex flex-col justify-between ">
        <div className="h-[80%]">
          <Table
            locale={{ emptyText: "No Data available" }}
            style={{ maxWidth: "100%" }}
            rowClassName={(record) => {
              return `${record.status}`;
            }}
            // rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={task}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: TotalData,
              showSizeChanger: true,
              pageSizeOptions: ["100", "200", "300", "400", "500", "600", "700"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentPageSize(pageSize);
                fetchTask(page, pageSize);
              },
            }}
            onChange={handleTablePageChange}
            scroll={{ y: 400, x: "max-content" }} // Ensure table content is scrollable
          />
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