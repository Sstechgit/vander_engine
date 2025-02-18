import { Button, Modal, Table } from 'antd'
import React, { useState } from 'react'

export default function ViewLead({state}) {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };
    const dropModal = () => {
        setOpen(false);
    };
    const Columns = [
        { key: "id", title: "Sno", dataIndex: "id", width: 100 },
        { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
        {
            key: "lead_email",
            title: "Client Email",
            dataIndex: "email",
            width: 100,
            render: (_, record) => {
                return (record.email.slice(0, 3) + ".....@gmail.com");
            },
        },
        {
            key: "lead_phone",
            title: "Client Contact",
            dataIndex: "phone",
            width: 100,
            render: (_, record) => (
                <a href={`tel:${record.phone}`} className="flex gap-2 items-center">
                    <i className="fa-solid fa-phone"></i>
                    {record.phone.slice(0, 5) + "xxxxx..."}
                </a>
            ),

        },
        {
            key: "lead_description",
            title: "Description",
            dataIndex: "description",
            width: 200,
        },
        { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
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
                let formattedDate = formatDate(_);
                return <p>{formattedDate}</p>;
            },
        },
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
                    //   dataSource={filteredLeads}
                    columns={Columns}
                    scroll={{ x: "max-content" }} // Allow horizontal scrolling if content exceeds width
                />
            </Modal>
        </div>
    )
}
