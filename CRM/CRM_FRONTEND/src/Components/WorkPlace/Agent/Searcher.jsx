import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useState } from "react";
import { DoFetch } from "../../../Utils/DoFetch";
import { urls } from "../../../../links";
import { Link } from "react-router-dom";
import { getErrors } from "../../../Utils/ExtractError";
import Add_Quotation from "./Add_Quotation";

export default function Searcher({
  record,
  setload,
  concat = false,
  func = null,
  setBody = null,
}) {
  const [product, setproduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [TotalData, setTotalData] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const AddQuatation = async ({
    part,
    year,
    make,
    model,
    variant,
    pricing,
    miles,
    stock,
    description,
    setErrors,
  }) => {
    const url = urls.addQuotation;

    const extHeader = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      part,
      year,
      make,
      model,
      variant,
      pricing,
      miles,
      stock,
      description,
    });

    const result = await DoFetch(url, "POST", body, extHeader);
 
    if (result.success === true) {
      alert("Quatation is added");
      return true;
    } else {
      let err = getErrors(result, [
        "part",
        "year",
        "make",
        "model",
        "variant",
        "pricing",
        "miles",
        "stock",
        "description",
      ]);
      if (err.date) {
        alert(err.date);
      }
      setErrors(err);
      return false;
    }
  };

  const getResult = async () => {
    setOpen(true);
    
    let url = urls.searchProduct;  // Make sure urls.searchProduct points to "/search-product"
    let body = JSON.stringify({ description: record.description });
  
    const extHeader = {
      "Content-Type": "application/json",
    };
  
    let result = await DoFetch(url, "POST", body, extHeader);
  
    if (result.success === true) {
      let records = [];
      let idx = 1;
      result.data.forEach((item) => {
        records.push({
          key: idx,
          ...item,
        });
        idx++;
      });
      setproduct(records);
      setTotalData(result.data.length);
    }
  };
  
  let columns = [
    { key: "make", title: "Make", dataIndex: "make" },
    { key: "year", title: "Year", dataIndex: "year" },
    { key: "model", title: "Model", dataIndex: "model" },
    { key: "part", title: "Part", dataIndex: "part" },
    { key: "variant", title: "Variant", dataIndex: "variant" },
    { key: "pricing", title: "Pricing", dataIndex: "pricing" },
    { key: "Stock", title: "Stock No", dataIndex: "Stock" },
    { key: "description", title: "Description", dataIndex: "description" },
    {
      key: "miles",
      title: "Miles",
      dataIndex: "miles",
      render: (_, record) => <p>{record.miles === "" ? "-" : record.miles}</p>,
    },
  ];  
  if (concat == true) {
    columns = [
      {
        key: "add",
        title: "Add To Email",
        dataIndex: "add",
        width:140,
        render: (_, record) => (
          <Button onClick={() => func(record, setBody,dropModal())} type="primary" ghost >
            <i class="fa-solid fa-circle-plus"></i>
          </Button>
        ),
      },
      ...columns,
    ];
  }
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
  };
  const dropModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={getResult}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
      <Modal
        width={1500}
        open={open}
        onCancel={dropModal}
        footer={[
          <div className="flex justify-between">
            <Link
              to="/crm/agent/website"
              className=" font-bold text-lime-800 border p-1 border-lime-800"
            >
              Search with Website
            </Link>
            <Button type="primary" ghost onClick={showModal}>
              Add Quotation
            </Button>
            <Button key="ok" onClick={dropModal} className=" ">
              Ok
            </Button>
          </div>,
        ]}
      >
        <Table
          columns={columns}
          dataSource={product}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: TotalData,
            showSizeChanger: true,
            pageSizeOptions: ["2", "10", "15", "20", "25", "30"],
            onChange: (page, pageSize) => {
              setCurrentPage(page);
              setCurrentPageSize(pageSize);
            },
          }}
          scroll={{ y: 200, x: "max-content" }} // Ensure table content is scrollable
          onChange={handleTablePageChange}
        ></Table>
      </Modal>
      <Add_Quotation
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        onClick={AddQuatation}
        parameter={true}
      />
    </>
  );
}
