import { Button, Modal, Table } from "antd";
import React, { useState } from "react";
import Searcher from "./Searcher";

export default function DescriptionModel({ record }) {
  const [isOrder, setisOrder] = useState(record.order);
  const [open, setOpen] = useState(false);
  const orderColumns = [
    { key: "Product", title: "Product", dataIndex: "description" },
    { key: "card_no", title: "Card No", dataIndex: "card_no" },
    { key: "cvv", title: "CVV", dataIndex: "cvv" },
    { key: "expiry_date", title: "Expiry Date", dataIndex: "expiry_date" },
    { key: "amount", title: "Amount (USD)", dataIndex: "amount" },
    {
      key: "billing_address",
      title: "Billing Address",
      dataIndex: "billing_address",
      width:250
    },
    {
      key: "shipping_address",
      title: "Shipping Address",
      dataIndex: "shipping_address",
      width:250
    },
  ];
  const leadColumns = [
    { key: "Product", title: "Product", dataIndex: "description" },
  ];
  const openModal = () => setOpen(true);
  
  const dropModal = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Button type="primary" ghost onClick={openModal}>
        View
      </Button>
      <Modal width={1500}
        open={open}
        onCancel={dropModal}
        footer={[
          <Button key="ok" onClick={dropModal}>
            Ok
          </Button>,
        ]}
      >
        <Table locale={{ emptyText: 'No Data available' }}
          // rowSelection={{ type: "checkbox", ...rowSelection }}
          columns={isOrder ? orderColumns : leadColumns}
          dataSource={[record]}
          scroll={{ x: "max-content" }}
          // Ensure table content is scrollable
          // onChange={handleTablePageChange}
        ></Table>
      </Modal>
    </>
  );
}
