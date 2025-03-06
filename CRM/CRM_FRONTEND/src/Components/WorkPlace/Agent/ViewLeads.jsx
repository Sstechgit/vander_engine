import { Button, Modal, Table } from "antd";
import React, { useState, useEffect } from "react";
import { formatDate } from "../../../Utils/parseAndFormatDate";
import ShowInvoice from "./utilComp/ShowInvoice";
import SendMessages from "./SendMessages";
import EmailConversation from "./EmailConversation";
import View_Quotation from "./View_Quotation";
import Status from "./Status";

export default function ViewLeads({ task = [], state = "" }) {
  const [open, setOpen] = useState(false);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [columns, setColumns] = useState([]); // State for dynamic columns
  const [modalWidth, setModalWidth] = useState(0); // State to dynamically set the modal width

  const openModal = () => {
    setOpen(true);
  };

  const dropModal = () => {
    setOpen(false);
  };

  // Filter leads based on the passed `state` prop
  useEffect(() => {
    if (state && state !== "All") {
      const filtered = task.filter((lead) => lead.status === state);
      setFilteredLeads(filtered);
    } else {
      setFilteredLeads(task); // If no state filter, show all leads
    }
  }, [task, state]);

  // Dynamically set columns based on the state
  useEffect(() => {
    const baseColumns = [
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
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, record) => {
          return <Status record={record}  />;
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

    // Add extra columns if state is "Pending"
    if (state === "Pending" || state === "Quotation Given" || state === "No Response") {
      const extraColumns = [
        {
          title: "Send Email",
          dataIndex: "",
          key: "send email",
          width: 120,
          render: (_, record) => {
            return <EmailConversation record={record} />;
          },
        },
        {
          title: "Send Via RingCentral",
          dataIndex: "",
          key: "send msg",
          width: 140,
          render: (_, record) => {
            return <SendMessages record={record} />;
          },
        },
        {
          title: "Send Invoice To Admin",
          dataIndex: "",
          key: "send invoice",
          width: 150,
          render: (_, record) => {
            return <ShowInvoice record={record} />;
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

      // Insert extra columns after the 3rd column (Client Email)
      const updatedColumns = [
        ...baseColumns.slice(0, 3), // First 3 columns (up to "Client Email")
        ...extraColumns, // Extra columns to add after 3rd column
        ...baseColumns.slice(3), // Remaining columns (after "Client Contact")
      ];

      setColumns(updatedColumns);

      // Calculate the total width of all columns
      const totalWidth = updatedColumns.reduce(
        (acc, column) => acc + (column.width || 0),
        0
      );
      setModalWidth(totalWidth); // Set the modal width to the total column width
    } else {
      setColumns(baseColumns); // Use only base columns for non-pending states
      const totalWidth = baseColumns.reduce(
        (acc, column) => acc + (column.width || 0),
        0
      );
      setModalWidth(totalWidth); // Set the modal width for base columns
    }
  }, [state]); // Dependency on state

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
        width={modalWidth + 500} // Add a small buffer to the width
        open={open}
        onCancel={dropModal}
        footer={[
          <Button key="ok" type="primary" onClick={dropModal}>
            Ok
          </Button>,
        ]}
      >
        <Table
          dataSource={filteredLeads}
          columns={columns}
          scroll={{ x: "max-content" }} // Allow horizontal scrolling if content exceeds width
        />
      </Modal>
    </div>
  );
}
