import { Button, Modal, Table } from 'antd'
import React, { useState } from 'react'
import { formatDate } from "../../../Utils/parseAndFormatDate";
import View_Quotation from '../Agent/View_Quotation';

export default function ViewLead({ state = "", leads = [] }) {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };
    const dropModal = () => {
        setOpen(false);
    };
    console.log(leads)
    const Columns = [

        { key: "sno", title: "Sno", dataIndex: "_id", width: 100, render: (_, __, index) => index + 1 },
        {
            key: "user.name",
            title: "Agent Name",
            dataIndex: "user",
            width: 130,
            render: (user) => {
                if (Array.isArray(user) && user.length > 0) {
                    return (
                        <span style={{ fontWeight: "bold", color: "#1890ff", fontSize: "16px" }}>
                            {user[0].name}
                        </span>
                    )
                }
                return <span style={{ fontWeight: "bold", color: "gray" }}>N/A</span>;
            },

        },
        { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
        {
            key: "lead_email",
            title: "Client Email",
            dataIndex: "email",
            width: 100,
            render: (_, record) => {
              return (
                <a 
                  href={`mailto:${record.email}`} 
                  className="flex gap-2 items-center"
                >
                  {record.email}
                </a>
              );
            }
          },
          {
            key: "lead_phone",
            title: "Client Contact",
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
            key: "lead_description",
            title: "Description",
            dataIndex: "description",
            width: 200,
        },
        { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
        {
            key: "createdAt",
            title: "Generated",
            dataIndex: "task",
            width: 150,
            sorter: (a, b) => {
                const dateA = new Date(a.task?.[0]?.createdAt);
                const dateB = new Date(b.task?.[0]?.createdAt);

                if (isNaN(dateA.getTime())) return 1;
                if (isNaN(dateB.getTime())) return -1;

                return dateA - dateB;
            },
            render: (_, record) => {
                let createdAt = record.task?.[0]?.createdAt;
                if (!createdAt) return <p>N/A</p>; // Handle missing dates

                let formattedDate = formatDate(new Date(createdAt)); // Convert string to Date
                return <p>{formattedDate}</p>;
            },

        },
        {
            key: "deadline",
            title: "Deadline",
            dataIndex: "deadline",
            width: 150,
            sorter: (a, b) => {
                const dateA = new Date(a.deadline);
                const dateB = new Date(b.deadline);

                // Handle invalid dates
                if (isNaN(dateA.getTime())) return 1; // Treat invalid dates as later
                if (isNaN(dateB.getTime())) return -1; // Treat invalid dates as earlier

                return dateA - dateB;
            },
            render: (_, record) => {
                let deadline = record.task?.[0]?.deadline;
                if (!deadline) return <p>N/A</p>; // Handle missing dates

                let formattedDate = formatDate(new Date(deadline)); // Convert string to Date
                return <p>{formattedDate}</p>;
            },
        },

        ...(state === "Quotation Given"
            ? [
                {
                    title: "View Quotation",
                    dataIndex: "view_quotation",
                    key: "view_quotation",
                    width: 180,
                    render: (_, record) => <View_Quotation record={record} />,
                },
            ]
            : []),

    ];
    return (
        <div>
            <Button
                size="large"
                block
                onClick={openModal}
                style={{ backgroundColor: "transparent", color: "#fff" }}
            >
                {state}
            </Button>
            <Modal
                width={1500} // Add a small buffer to the width
                open={open}
                onCancel={dropModal}
                footer={[
                    <Button key="ok" type="primary" onClick={dropModal}>
                        Ok
                    </Button>,
                ]}
            >
                <Table
                    dataSource={leads}
                    columns={Columns}
                    rowKey="id"
                    scroll={{ x: "max-content" }} // Allow horizontal scrolling if content exceeds width
                />
            </Modal>
        </div>
    )
}
