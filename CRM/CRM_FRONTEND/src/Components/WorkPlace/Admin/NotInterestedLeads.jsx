import { Button, Modal, Table } from "antd";
import React, { useState } from "react";


export default function NotInterestedLeads() {
    const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  const dropModal = () => {
    setOpen(false);
  };
  const columns =  [
    { key: "_id", title: "Sno", dataIndex: "_id", width: 100 },
    { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
    {
      key: "lead_email",
      title: "Client Email",
      dataIndex: "email",
      width: 100,
    },
    {
      key: "lead_phone",
      title: "Client Contact",
      dataIndex: "phone",
      width: 100,
      render: (_, record) => {
        return <a href={`tel:${record.phone}`} className="flex gap-2 items-center"><i className="fa-solid fa-phone"></i>{record.phone}</a>;
      },
    },
    {
      key: "lead_description",
      title: "Description",
      dataIndex: "description",
      width: 200,
    },
    { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
   

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
    
  
  ];
  return (
    <div className='flex items-center gap-2'>
    <p>Total Count:</p>
    <Button type="primary" ghost onClick={openModal}>View</Button>
    <Modal
        width={1500}
        open={open}
        onCancel={dropModal}
        footer={[
          <Button key="ok" onClick={dropModal} type="primary">
           Save
          </Button>,
        ]}
      >
        <Table
        columns={columns}
          scroll={{ x: "max-content" }}
        ></Table>
      </Modal>
</div>
  )
}
