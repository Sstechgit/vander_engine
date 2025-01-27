import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";
import EmailConversation from "../Agent/EmailConversation";

export default function AgentLead({ record, status }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState();
  const [open, setOpen] = useState(false);
  const [task, settask] = useState([]);
  const openModal = () => setOpen(true);

  const dropModal = () => {
    setOpen(false);
  };
  const fetchLeads = async () => {
    if (open === false) {
      return;
    }
    const url = urls.TaskOnStatus + `/${currentPage}/${pageSize}`;
    const extHeader = {
      agent: record.key,
      status: status,
    };
    const result = await DoFetch(url, "GET", null, extHeader);
    // console.log(result);
    if (result.success == true) {
      let tasks = [];
      result.payload.records.forEach((e, idx) => {
        tasks.push({
          id: idx + (currentPage - 1) * pageSize + 1,
          key: e._id,
          name: e.leads[0].name,
          email: e.leads[0].email,
          deadline: parseCustomDate(
            e.deadline || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          created: parseCustomDate(
            e.leads[0].createdAt || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          phone: e.leads[0].phone,
          description: e.leads[0].description,
          origin: e.leads[0].origin,
          leadId: e.leads[0]._id,
        });
      });
      settask(tasks);
      setTotalData(result.payload.count);
    }
  };
  useEffect(() => {
    fetchLeads();
  }, [open]);
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "id", width: 100 },
    { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
    {
      key: "lead_email",
      title: "Client Email",
      dataIndex: "email",
      width: 100,
    },
    {
      key: "conversation",
      title: "Conversation",
      dataIndex: "Conversation",
      width: 100,
      render: (_, leadrecord) => {
        return (
          <EmailConversation record={leadrecord} conversationDisabled={true} />
        );
      },
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
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchLeads(pagination.current, pagination.pageSize);
  };
 
  const colors = {
    // "Totaltasks":"#e9dbdb",
    Pending: "orange",
    Completed: "green",
    "Not Interested": "#575353",
    Sale: "#52bf3d",
    "Hot Lead": "#ff5722",
    "Voice Mail": "blue",
    "Already Purchased": "purple",
    Failed: "red",
    "Quotation Given":"brown",
    "No Response": "gray",
    Closed: "black",
  };
  return (
    <div
      className="flex items-center gap-2"
     
    >
      <p className=" font-bold text-base"  style={{color: colors[status]}}>Total Count: {record.tasks[status] || 0}</p>
      <Button type="primary"  onClick={openModal}>
        View
      </Button>
      <Modal
        width={1500}
        open={open}
        onCancel={dropModal}
        footer={[
          <Button key="ok" onClick={dropModal} type="primary">
            Ok
          </Button>,
        ]}
      >
        <Table
          columns={columns}
          locale={{ emptyText: "No Agents available" }}
          dataSource={task}
          scroll={{ y: 200, x: "max-content" }}
          style={{ top: 20 }}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: TotalData,
            showSizeChanger: true,
            pageSizeOptions: ["2", "4", "6", "8", "10", "15"],
            onChange: (page, pageSize) => {
              setCurrentPage(page);
              setCurrentPageSize(pageSize);
              fetchLeads(page, pageSize);
            },
          }}
          onChange={handleTablePageChange}
        ></Table>
      </Modal>
    </div>
  );
}
