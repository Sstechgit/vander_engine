import { Button, Modal, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { parseCustomDate } from "../../../Utils/parseAndFormatDate";
import ShowInvoice from "../Agent/utilComp/ShowInvoice";

export default function Super_Invoice({setload}) {
  const [viewInvoice, setviewInvoice] = useState(false);
  const [invoice, setinvoice] = useState([])
  //states for selection
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState(0);
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchInvoice(pagination.current, pagination.pageSize);
  };
  const showInvoice = () => {
    setviewInvoice(true);
  };
  const handleOk = () => {
    setviewInvoice(false);
  };
  const handleCancel = () => {
    setviewInvoice(false);
  };
  const fetchInvoice = async (page, pageRows) => {
    let url = urls.fetchInvoice + `/${page}/${pageRows}`;
   
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
          invoice:task.invoice,
          invoiceSaved:true
        });
      });

      setinvoice(records);
      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
    }
  };
  useEffect(() => {
    if (!sessionStorage.getItem("accessT")) {
      return;
    }
    fetchInvoice(currentPage, pageSize);

    let id = setInterval(() => {
      fetchInvoice(currentPage, pageSize);
    }, 12000);
    return () => {
      clearInterval(id);
    };
  }, [currentPage, pageSize]);
  const onDelete=async(id)=>{
    if(confirm("Do You want to delete the invoice")===false){
        return
    }
    setload({
        spin: true,
        tip: "Deleting",
      });
    const url=urls.deleteInvoice
    const extHeader={
        "taskId":id
    }
    const result=await DoFetch(url,"DELETE",null,extHeader)
    if(result.success===true){
        alert("Invoice is deleted")
        await fetchInvoice(currentPage,pageSize)
    }
    else{
        alert("Server Issue occured")
    }
    setload({
        spin: false,
        tip: "",
      });
  }
  //header for table
  const columns = [
    {
      key: "_id",
      title: "Sno",
      dataIndex: "_id",
      width: 80,
    },
    {
      key: "lead_name",
      title: "Client Name",
      dataIndex: "name",
      width: 130,
    },
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
    {
      key: "lead_origin",
      title: "Origin",
      dataIndex: "origin",
      width: 160,
    },
    {
      key: "Agent",
      title: "Agent",
      dataIndex: "agentEmail",
      width: 160,
    },
    {
      key: "invoice",
      title: "Invoice",
      dataIndex: "invoice",
      render: (_, record) => {
        return <ShowInvoice record={record} admin={true} func={()=>{}} />
      },
    },
    {
        key: "delete",
        title: "Delte",
        dataIndex: "delete",
        width: 160,
        render:(_,record)=>{
            return <Button type="primary" danger={true} onClick={()=>onDelete(record.key)}>Delete</Button>
        }
      },
  ];
  const data = [
    {
      _id: "1",
      name: "abcdefg",
      email: "abc@gmail.com",
      phone: "1234567890",
      description: "xcggvjkkmll;",
      status: "Panding",
      origin: "Vander Engines",
      agentEmail: "xyz@gmail.com",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={invoice}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: TotalData,
          showSizeChanger: true,
          pageSizeOptions: ["2", "10", "15", "20", "25", "30"],
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentPageSize(pageSize);
            fetchInvoice(page, pageSize);
          },
        }}
        scroll={{ y: 400, x: "max-content" }} // Ensure table content is scrollable
        onChange={handleTablePageChange}
      ></Table>
    </div>
  );
}
