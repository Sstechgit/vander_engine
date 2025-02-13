import { Button, Modal, Table } from 'antd';
import React, { useState } from 'react';
import { DoFetch } from '../../../Utils/DoFetch';

export default function View_Quotation({ record }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [TotalData, setTotalData] = useState(0);
  const [product, setProduct] = useState([]);

  const getResult = async () => {
    setOpen(true);
    // console.log("Fetching quotations for email:", record.email);

    const url = `http://localhost:8000/api/ViewQuotations?email=${record.email}`;

    try {
      let result = await DoFetch(url, "GET");

      if (result.success) {
        let records = result.data.map((item, idx) => ({ key: idx + 1, ...item }));
        setProduct(records);
        setTotalData(result.data.length);
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const columns = [
    { key: "make", title: "Make", dataIndex: "make" },
    { key: "year", title: "Year", dataIndex: "year" },
    { key: "model", title: "Model", dataIndex: "model" },
    { key: "part", title: "Part", dataIndex: "part" },
    { key: "variant", title: "Variant", dataIndex: "variant" },
    { key: "pricing", title: "Pricing", dataIndex: "pricing" },
    { key: "stock", title: "Stock No", dataIndex: "stock" }, // Fixed stock column
    { key: "description", title: "Description", dataIndex: "description" },
    {
      key: "miles",
      title: "Miles",
      dataIndex: "miles",
      render: (_, record) => <p>{record.miles ? record.miles : "-"}</p>,
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={getResult} ghost>
        View Quotation
      </Button>
      <Modal width={1500} open={open} onCancel={() => setOpen(false)} footer={null}>
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
          scroll={{ y: 200, x: "max-content" }} // Ensures table is scrollable
        />
      </Modal>
    </div>
  );
}
