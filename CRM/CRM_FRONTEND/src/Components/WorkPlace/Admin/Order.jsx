import { Pagination, Table, Button, message } from "antd";

import React, { useEffect, useMemo, useState } from "react";
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
export default function Order({ setload }) {
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
  const [orders, setOrders] = useState([]);

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
    //   func: fetchOrders,
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
  const fetchOrders = async (page, pageRows) => {
    // setload({
    //   spin: true,
    //   tip: "Loading",
    // });

    let url = urls.GetOrders + `/${page}/${pageRows}`;

    let result = await DoFetch(url);
   
    if (result.success == true) {
      let records = [];

      result.payload.records.forEach((order, idx) => {
        records.push({
          key: order._id,
          _id: (page - 1) * pageRows + idx + 1,
          name: order.name,
          email: order.email,
          phone: order.phone,
          description: order.description + " " + order.part,
          origin: order?.origin,
          created: parseCustomDate(order?.date),
          assigned: order.task[0]?._id ? true : false,
          agent: order.user[0],
          task: order.task[0],
          billingAddress: order.billing_address,
          shippingAddress: order.shipping_address,
          cardNo: order.card_no,
          expDate: order.expiry_date,
          cvv: order.CVV,
          amt: order.amount,
        });
      });

      setOrders(records);

      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
    }
    // setload({
    //   spin: false,
    //   tip: "",
    // });
  };
  //Delete a order
  const handleDelete = async (record) => {
    let confirmDelete = confirm(
      `Do you want to delete Order?`
    );
    if (!confirmDelete) {
      return;
    }
    // setload({
    //   spin: true,
    //   tip: "Deleting",
    // });
    let url = urls.deleteOrder;
   
    let extHeader = {
      "Content-Type": "application/json",
      "orderId":record.key
    };

    let result = await DoFetch(url, "DELETE", null, extHeader);

    if (result.success == true) {
      await fetchOrders(currentPage, pageSize);
      messageApi.info("1 Order is deleted");
      setSelectedLeads([]);
    } else {
      alert("Server Side Issue");
    }
    // setload({
    //   spin: false,
    //   tip: "",
    // });
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
    //   spin: true,
    //   tip: "Adding",
    // });
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
      await fetchOrders(currentPage, pageSize);
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
    //   spin: false,
    //   tip: "",
    // });
  };
  const EditLead = async (name, email, description, origin, phone, leadId) => {
    seterrors([]);
    // setload({
    //   spin: true,
    //   tip: "Editing",
    // });
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
      await fetchOrders(currentPage, pageSize);
      setParameters([]);
      setOpen(false);
    }
    // setload({
    //   spin: false,
    //   tip: "",
    // });
  };

  // const DistributeAll = (records, changeSelection) => {
  //   let notAssignedFromSelection = [];
  //   records.forEach((lead) => {
  //     if (lead.assigned === false) {
  //       notAssignedFromSelection.push(lead.key);
  //     }
  //   });
  //   console.log(notAssignedFromSelection);
  //   setSelectedLeads(notAssignedFromSelection);
  //   setOpenDistribute(true);
  // };
  // const handleDistribute = async (
  //   SelectedAgent,
  //   AllAgents,
  //   orders,
  //   deadline,
  //   redistribute,
  //   seterrors
  // ) => {
  //   console.log("order", orders);

  //   seterrors([]);
  //   if (deadline === "") {
  //     seterrors({ deadline: "Please Provide Deadline" });
  //     return;
  //   }
  //   let all = false;
  //   SelectedAgent.forEach((agent) => {
  //     if (agent === "ALL") {
  //       all = true;
  //       return;
  //     }
  //   });
  //   let agentsId = [];
  //   if (all) {
  //     AllAgents.forEach((agent) => {
  //       if (agent.label != "ALL") {
  //         agentsId.push(agent.value);
  //       }
  //     });
  //   }
  //   console.log(AllAgents, agentsId, orders);
  //   console.log(all, SelectedAgent, AllAgents, "ags");
  //   let result;
  //   if (redistribute === false) {
  //     let dataArr;
  //     if (!orders.length) {
  //       //object
  //       dataArr = [orders.key];
  //     } else {
  //       dataArr = orders.map((e) => {
  //         return e.key;
  //       });
  //     }

  //     setload({
  //       spin: true,
  //       tip: "ordering",
  //     });
  //     let url = urls.DistributeOrder;

  //     let body = JSON.stringify({
  //       orders: dataArr,
  //       agents: all === true ? agentsId : SelectedAgent,
  //       deadline,
  //     });

  //     let extHeaders = {
  //       "Content-Type": "application/json",
  //     };
  //     result = await DoFetch(url, "POST", body, extHeaders);
  //   } else {
  //     let url = urls.ReDistributeOrder;
  //     let dataArr = orders.map((e) => {
  //       return e.task._id;
  //     });
  //     console.log("orders", orders);
  //     let body = JSON.stringify({
  //       taskArr: dataArr,
  //       agents: all === true ? agentsId : SelectedAgent,
  //       deadline,
  //     });

  //     let extHeaders = {
  //       "Content-Type": "application/json",
  //     };
  //     result = await DoFetch(url, "PUT", body, extHeaders);
  //     console.log(result);
  //   }

  //   if (result.success == false) {
  //     let errorsObj = getErrors(result, [
  //       "leads",
  //       "tasks",
  //       "agents",
  //       "deadline",
  //     ]);
  //     seterrors(errorsObj);
  //   } else {
  //     messageApi.info(`${orders.length || 1} Orders are distributed`);
  //   }
  //   setload({
  //     spin: false,
  //     tip: "",
  //   });
  // };
  //header for table
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "_id", width: 100 },
    { key: "order_name", title: "Order Name", dataIndex: "name", width: 200 },
    {
      key: "order_email",
      title: "Order Email",
      dataIndex: "email",
      width: 100,
    },
    {
      key: "order_phone",
      title: "Order Contact",
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
      key: "order_description",
      title: "Description",
      dataIndex: "description",
      width: 200,
    },
    {
      key: "order_amt",
      title: "Amount",
      dataIndex: "amt",
      width: 100,
    },
    {
      key: "order_CardNo",
      title: "Card No",
      dataIndex: "cardNo",
      width: 150,
    },
    {
      key: "order_CVV",
      title: "CVV",
      dataIndex: "cvv",
      width: 150,
    },
    {
      key: "order_expDate",
      title: "Expiry Date",
      dataIndex: "expDate",
      width: 150,
    },
    {
      key: "billingAddress",
      title: "Billing Address",
      dataIndex: "billingAddress",
      width: 250,
    },
    {
      key: "shippingAddress",
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      width: 250,
    },

    { key: "order_origin", title: "Origin", dataIndex: "origin", width: 160 },
    

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
    // {
    //   key: "EditId",
    //   title: "",
    //   dataIndex: "EditId",
    //   render: (_, record) => {
    //     return (
    //       <Button
    //         type="primary"
    //         style={{ width: "2rem" }}
    //         onClick={() => {
    //           AddandEditLead(record);
    //         }}
    //       >
    //         <i className="fa-solid fa-pen-to-square"></i>
    //       </Button>
    //     );
    //   },
    // },
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
      }
    },
  };
  //handle Table page change
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchOrders(pagination.current, pagination.pageSize);
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
          func: fetchOrders,
          parameters: [currentPage, pageSize],
          danger: false,
        },
      });
    }
  }, [selectedLeads]);

  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchOrders(currentPage, pageSize);

    let id = setInterval(() => {
      fetchOrders(currentPage, pageSize);
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
          leadArr={selectedLeadRecord}
          messageApi={messageApi}
          redistribute={redistribute}
          leadRecord={selectedLeadRecord}
          changeSelection={setSelectedLeads}
          func={handleDistribute}
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
          <Table locale={{ emptyText: 'No Orders available' }}
            style={{ maxWidth: "100%" }}
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={orders}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: TotalData,
              showSizeChanger: true,
              pageSizeOptions: ["2", "10", "15", "20", "25", "30"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentPageSize(pageSize);
                fetchOrders(page, pageSize);
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
    </>
  );
}
