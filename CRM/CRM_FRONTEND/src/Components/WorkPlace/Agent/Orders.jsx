import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import Status from "./Status";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function Orders({setload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [task, settask] = useState([]);
  const [TotalData, setTotalData] = useState();
  const fetchTask = async (page, pageRows) => {
    // setload({
    //   spin:true,tip:"Loading"
    // })
    let url = urls.getCompletedOrders + `/${page}/${pageRows}`;
    // console.log(url);
    let result = await DoFetch(url);
    // console.log(result);
    if (result.success == true) {
      let record = [];
      let idx = 0;
      // console.log(result)
      result.payload.records.forEach((taskval,idx) => {
          record.push({
            id: idx+1,
            name: taskval.orders[0].name,
            email: taskval.orders[0].email,
            product: taskval.orders[0].description,
            card_no: taskval.orders[0].card_no,
            status: taskval.state,
            // additional
            cvv: taskval.orders[0].CVV,
            exp_date: taskval.orders[0].expiry_date,
            amount: taskval.orders[0].amount,
            billing_address: taskval.orders[0].billing_address,
            shipping_address: taskval.orders[0].shipping_address,
            // card_no: taskval.orders[0].card_no,
            // expiry_date: taskval.orders[0].expiry_date,
            // type: "orders",
          });
      
        idx++;
      });
      
      // console.log(records);
      settask(record);

      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
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
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: 200,
    },
    {
      title: "Card No.",
      dataIndex: "card_no",
      key: "card_no",
    },
    {
      title: "CVV",
      dataIndex: "cvv",
      key: "cvv",
    },
    {
      title: "Expiry Date",
      dataIndex: "exp_date",
      key: "exp_date",
    },
    {
      title: "Amount(USD)",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "Billing Address",
      key: "billing_address",
      dataIndex: "billing_address",
      width: 200,
    },
    {
      title: "Shipping Address",
      key: "shipping_address",
      dataIndex: "shipping_address",
      width: 200,
    },
    {
      title: "Status",
      key: "origin",
      dataIndex: "origin",
      render: (_, record) => {
        return <Status record={record} />;
      },
    },
  ];

  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTask(pagination.current, pagination.pageSize);
  };
  useEffect(() => {
    fetchTask(1, 10);
  }, []);
  return (
    <div className="Orders">
      <Table locale={{ emptyText: 'No Orders available' }} style={{ maxWidth: "100%" }}
        className=""
        columns={columns}
        dataSource={task}
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
        scroll={{ x: "max-content" }}
      />
      ;
    </div>
  );
}
