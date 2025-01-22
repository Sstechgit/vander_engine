import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Table } from "antd";
import EmailConversation from "./EmailConversation";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
const { Search } = Input;
const suffix = <AudioOutlined />;



export default function EmailSearch({setload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState();
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };
  const [clientInfo, setClientInfo] = useState([])
const onSearch = async(value, _e, info) => {
  // setload({
  //   spin:true,tip:"Loading"
  // })
  let url=urls.SearchByName
  let name=value
  let extHeader={
    "name":name
  }
  let result=await DoFetch(url,"GET",null,extHeader)
  
  if(result.success){
    let clients=[]
    result.payload.forEach((e,idx)=>{
      clients.push({
        key:e._id,
        id:idx+1,
        type:"lead",
        leadId:e._id,
        name:e.name,
        email:e.email,
        phone:e.phone,
        desc:e.description,
        origin:e.origin
      })
    })
    setClientInfo(clients)
  }
  // setload({
  //   spin:false,tip:""
  // })
};
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Product_Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "",
      dataIndex: "send",
      key: "send",
      render: (_, record) => {
        return <EmailConversation record={record} />;
      },
    },
  ];
  const data = [
    {
      id: "1",
      name: "John Brown",
      email: "abc@gmail.com",
      phone: "+12.......",
      desc: "Quality Engine",
    },
    {
      id: "1",
      name: "John Brown",
      email: "abc@gmail.com",
      phone: "+12.......",
      desc: "Quality Engine",
    },
    {
      id: "1",
      name: "John Brown",
      email: "abc@gmail.com",
      phone: "+12.......",
      desc: "Quality Engine",
    },
  ];
  return (
    <div>
      {/* <Space
        direction="vertical"
        style={{ width: "100%", padding: "20px", backgroundColor: "#f0f2f5" }}
      > */}
        <Search
          placeholder="Search with Client name"
          onSearch={onSearch}
          enterButton
          className="w-[90%] mt-4 ml-4"
        />
        <Table locale={{ emptyText: 'No Data available' }}
          className="m-2"
          columns={columns}
          dataSource={clientInfo}
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
      {/* </Space> */}
    </div>
  );
}
