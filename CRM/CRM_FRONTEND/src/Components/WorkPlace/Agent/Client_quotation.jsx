import { Button, Table } from "antd";

import Client_quotation_function from "./Client_quotation_function";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";


export default function Client_quotation({setload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(500);
  const [TotalData, setTotalData] = useState();
  const [quotation, setquotation] = useState([])
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };
  const fetchQuotation=async()=>{
    const url=urls.fetchQuotation+`/${currentPage}/${pageSize}`
    const result=await DoFetch(url,"GET")
   
    if(result.success===true){
      let quotation=[]
      result.payload.records.forEach((e,idx)=>{
        quotation.push({
          id: idx+(currentPage-1)*pageSize+1,
          key:e._id,
          year: e.year,
          make: e.make,
          part:e.part,
          model: e.model,
          variant: e.variant,
          miles: e.miles,
          pricing: e.pricing,
          desc: e.description,
          stocknumber: e.stock,
          saved:e.saved
        })
      })
      setquotation(quotation)
    }
  }
  useEffect(()=>{
    fetchQuotation()
  },[])
  // Delete Quotation

  const handleDelete = async (record, Selected = false) => {
    let confirmDelete = confirm(`Do you want to delete ${1} Note?`);
    if (!confirmDelete) {
      return;
    }
    // setload({
    //   spin:true,tip:"Deleting"
    // })
    let url = urls.deleteQuotion;
    let extHeader = {
      quotationId: record.key,
    };
    let result = await DoFetch(url, "DELETE", null, extHeader);
   
    if (result.success == true) {
      await fetchQuotation();
    } else {
      alert("Server Side Issue");
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
      width:50,
    },
    {
      title: "Part",
      dataIndex: "part",
      key: "part",
      width: 140,
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
      width:80,
    },
    {
      title: "Model",
      key: "model",
      dataIndex: "model",
      width: 110,
    },
    {
      title: "Variant",
      key: "variant",
      dataIndex: "variant",
      width: 200,
    },
    {
      title: "Miles",
      key: "miles",
      dataIndex: "miles",
      width:100,
    },
    {
      title: "Pricing",
      key: "pricing",
      dataIndex: "pricing",
      width:100,
    },
    {
      title: "Description",
      key: "desc",
      dataIndex: "desc",
      width:250,
    },
    {
      title: "Stock Number",
      key: "stocknumber",
      dataIndex: "stocknumber",
      width: 130,
    },
    {
      title:"",
      key:"AddFunc",
      dataIndex:"AddFunc",
      render:(_,record) =>{
        return <Client_quotation_function setload={setload} record={record} Editdata={fetchQuotation} />
      }
    },
    {
      title:"",
      key:"delete_quotation",
      dataIndex:"delete_quotation",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {
              handleDelete(record);
            }}
            style={{ color: "red", border: "1px solid red" }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        );
      },
    }
  ];
  
  return (
    <div className="FollowUp">
      <Table
        className="m-2"
        columns={columns}
        dataSource={quotation}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: TotalData,
          showSizeChanger: true,
          pageSizeOptions: ["500", "1000", "1500", "2000", "2500", "3000"],
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentPageSize(pageSize);
            fetchTask(page, pageSize);
          },
        }}
        scroll={{ y: 450, x: "max-content" }}
      />
      
    </div>
  );
}
