import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";
import { Button, DatePicker, Modal, Table,message } from "antd";

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

export default function Task({ setload }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const navigate = useNavigate();
  const [task, settask] = useState([]);
  const [TotalData, setTotalData] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date
  const [mobileFilter, setMobileFilter] = useState("");

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
  // Function to filter tasks based on the selected date
  const filterTasks = (selectedDate, mobileFilter, tasks) => {
    return tasks.filter((task) => {
      const taskCreatedDate = new Date(task.createdLead).toLocaleDateString();
      const selectedDateString = selectedDate?.toLocaleDateString();

      // Check date condition
      const isDateMatch =
        !selectedDate || taskCreatedDate === selectedDateString;

      // Check mobile number condition
      const isMobileMatch = !mobileFilter || task.phone.includes(mobileFilter);

      return isDateMatch && isMobileMatch;
    });
  };
  const fetchTask = async (page, pageRows) => {
    let url = urls.GetTaskForAgent + `/${page}/${pageRows}`;

    let result = await DoFetch(url);

    if (result.success == true) {
      let record = [];
      let idx = 0;
      result.payload.records.forEach((taskval) => {
        if (!taskval?.orders) {
          record.push({
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
          });
        } else {
          record.push({
            key: taskval._id,
            orderId: taskval.orders[0]._id,
            _id: (page - 1) * pageRows + idx + 1,
            name: taskval.orders[0].name,
            email: taskval.orders[0].email,
            phone: taskval.orders[0].phone,
            description:
              taskval.orders[0].description + " " + taskval.orders[0].part,
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
          });
        }

        idx++;
      });
      // Filter tasks by the selected date if any
      settask(record);
      const filteredTasks = filterTasks(selectedDate, mobileFilter, record);

      settask(filteredTasks); // Set the filtered tasks

      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
    }
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
      // await fetchLeads(currentPage, pageSize);
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
  }, [currentPage, pageSize, selectedDate, mobileFilter]);

  return (
    <>
    {contextHolder}
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
      {/* DatePicker for selecting the filter date */}
      <div className="w-full border px-7 py-1">
        <DatePicker
          className="w-[50%] border-0"
          onChange={(date, dateString) =>
            setSelectedDate(date ? new Date(dateString) : null)
          }
        />
        <span className="w-[40%]">
          <input
            type="text "
            placeholder="Search By Mobile No. "
            value={mobileFilter}
            onChange={(e) => setMobileFilter(e.target.value)}
            className="ms-5 mobile-filter-input"
          />
          <i
            class="fa-solid fa-magnifying-glass float-end mt-2"
            onClick={filterTasks}
          ></i>
        </span>
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
              pageSizeOptions: ["10", "20", "30", "40", "50", "60", "70"],
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