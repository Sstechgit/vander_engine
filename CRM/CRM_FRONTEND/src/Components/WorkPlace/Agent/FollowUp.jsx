import { Table } from "antd";
import React, { useEffect, useState } from "react";
import DescriptionModel from "./DescriptionModel";
import Status from "./Status";
import ViewFollow from "./ViewFollow";

import EmailConversation from "./EmailConversation";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function FollowUp({setload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState();
  
  const [FollowUp, setFollowUp] = useState([])
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width:140
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => {
        return (
          <a 
            href={`mailto:${record.email}`} 
            className="flex gap-2 items-center"
          >
            {record.email
          ? record.email.slice(0, 3) + ".....@gmail.com"
          : "No email available"}
          </a>
        );
      }
      
    },
    
    {
      title: "Send",
      dataIndex: "",
      key: "send email",
      render: (_, record) => {
        return <EmailConversation record={record} />;
      },
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
      render: (_, record) => {
        const phone = record?.phone; // Optional chaining for safety
        return phone ? (
          <a href={`tel:${phone}`} className="flex gap-2 items-center">
            <i className="fa-solid fa-phone"></i>
            {phone.slice(0, 5) + "xxxxx..."}
          </a>
        ) : (
          <span>No phone available</span>
        );
      },
    },
    
    {
      title: "Info",
      key: "info",
      dataIndex: "info",
      render: (_, record) => {
        return <DescriptionModel record={record} />;
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, record) => {
        return <Status record={record} setload={setload}/>;
      },
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      width:80,
      render: (_, record) => {
        return <p>{record.order ? "Order" : "Lead"}</p>;
      },
      filters: [
        { text: "Order", value: true },
        { text: "Lead", value: false },
      ],
      onFilter: (value, record) => record.order === value,
    },
    // {
    //   title: "Origin",
    //   key: "origin",
    //   dataIndex: "origin",
    // },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      width: 140,
    },
    {
      title: "Follow Up",
      key: "followup",
      dataIndex: "followup",
      width: 120,
      render: (_, record) => {
        return <ViewFollow record={record} setload={setload}/>;
      },
    },
  ];
  
  const FetchFollowup = async () => {
    // setload({
    //   spin:true,tip:"Loading"
    // })

    let url = urls.getFollowup;
    let result = await DoFetch(url);

    
    if (result.success) {
      let followup = [];
      
      result.payload.forEach((e, idx) => {
        if (e.type === "leads") {
          followup.push({
            key: e._id,
            id: idx + 1,
            title: e.title,
            date: e.date,
            type: e.type,
            desc: e.description,
            name: e.details?.name,
            email: e.details?.email,
            description: e.details?.description,
            order: false,
            leadId: e.details?._id,
            phone: e.details?.phone,
            recordId: e.recordId,
            origin: e.details?.origin,
          });
        } else {
          followup.push({
            key: e._id,
            id: idx + 1,
            name: e.details.name,
            email: e.details.email,
            phone: e.details.phone,
            title: e.title,
            date: e.date,
            type: e.type,
            desc: e.description,
            description: e.details.description, // Ensure it's not duplicated
            cvv: e.details.CVV,
            orderId: e.details._id,
            amount: e.details.amount,
            billing_address: e.details.billing_address,
            card_no: e.details.card_no,
            expiry_date: e.details.expiry_date,
            origin: e.details.origin,
            part: e.details.part,
            recordId: e.recordId,
            shipping_address: e.details.shipping_address,
            order: true
          });
        }      });
      // setload({
      //   spin:false,tip:""
      // })
      setFollowUp(followup);
    }
  }
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };
  useEffect(()=>{
    FetchFollowup()
  },[])
  return (
    <div className="FollowUp">
      <Table className="m-2" columns={columns} dataSource={FollowUp}  locale={{ emptyText: 'No Followup available' }} // Custom empty text 
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: TotalData,
        showSizeChanger: true,
        pageSizeOptions: ["2", "4", "6", "8", "10", "15"],
        onChange: (page, pageSize) => {
          setCurrentPage(page);
          setCurrentPageSize(pageSize);
          fetchTask(page, pageSize);
        },
      }}
      scroll={{ y: 400, x: "max-content" }}
      />
    </div>
  );
}
