import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import AgentLead from "./AgentLead";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";

export default function TrackAgent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(500);
  const [TotalData, setTotalData] = useState(0);
  const [agents, setagents] = useState([]);
  const fetchTrackedAgents = async () => {
    const url = urls.trackAgent + `/${currentPage}/${pageSize}`;
    const result = await DoFetch(url, "GET");
    // console.log(result);

    if (result.success == true) {
      let agent = [];
      result.data.records.forEach((e, idx) => {
        agent.push({
          id: idx + (currentPage - 1) * pageSize + 1 + ".",
          key: e._id,
          name: e.name,
          email: e.email,
          last_login: parseCustomDate(
            e.login || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          last_logout: parseCustomDate(
            e.logout || "Thu, Aug 22, 2024 at 2:17 PM"
          ),
          tasks: e.taskStatusCount,
          Totaltasks:
            (e.taskStatusCount.Refund || 0) +
            (e.taskStatusCount.Pending || 0) +
            (e.taskStatusCount.Failed || 0) +
            (e.taskStatusCount["Not Interested"] || 0) +
            (e.taskStatusCount["Voice Mail"] || 0) +
            (e.taskStatusCount["Already Purchased"] || 0) +
            (e.taskStatusCount.Sale || 0) +
            (e.taskStatusCount["Hot Lead"] || 0) +
            (e.taskStatusCount.Exchange || 0) +
            (e.taskStatusCount["No Response"] || 0) +
            (e.taskStatusCount["Quotation Given"] || 0),
        });
      });
      setagents(agent);
      setTotalData(result.data.payload.total);
    }
  };
  useEffect(() => {
    fetchTrackedAgents();
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      width: 50,
      headerStyle: {
        // Style for the header
        textAlign: "center", // Center the header text
        backgroundColor: "#f0f0f0", // Background color of the header
        fontWeight: "bold", // Bold text in header
        fontSize: "18px", // Font size of the header text
      },

      render: (text) => (
        <div
          style={{
            textAlign: "center",
            fontSize: "16px ",
            fontWeight: "bolder",
          }}
        >
          {" "}
          {/* Custom style for cell */}
          {text}
        </div>
      ),
    },
    {
      title: "Agent Name",
      key: "name",
      dataIndex: "name",
      width: 150,
      headerStyle: {
        // Style for the header
        textAlign: "center", // Center the header text
        backgroundColor: "#f0f0f0", // Background color of the header
        fontWeight: "bold", // Bold text in header
        fontSize: "18px", // Font size of the header text
      },

      render: (text) => (
        <div style={{ textAlign: "center", fontSize: "16px " }}>
          {" "}
          {/* Custom style for cell */}
          {text}
        </div>
      ),
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      render: (_, record) => {
        return (
          <a 
            href={`mailto:${record.email}`} 
            className="flex gap-2 items-center"
          >
            {record.email.slice(0, 3) + ".....@gmail.com"}
          </a>
        );
      }
    },
    {
      title: "Last Login",
      key: "last_login",
      dataIndex: "last_login",
      width: 150,
      render: (_, record) => {
        return <span>{formatDate(_)}</span>;
      },
    },
    {
      title: "Last Logout",
      key: "last_logout",
      dataIndex: "last_logout",
      width: 150,
      render: (_, record) => {
        return <span>{formatDate(_)}</span>;
      },
    },
    // {
    //   title: "Total Leads",
    //   key: "Totaltasks",
    //   dataIndex: "Totaltasks",
    //   width: 150,
    // },
    {
      title: "Total Leads",
      key: "Totaltasks",
      dataIndex: "Totaltasks",
      width: 150,
    },
    {
      title: "Refund Leads",
      key: "Refund",
      dataIndex: "Refund",
      render: (_, record) => {
        return <AgentLead status={"Refund"} record={record} />;
      },
    },
    {
      title: "Pending Leads",
      key: "panding",
      dataIndex: "panding",
      render: (_, record) => {
        return <AgentLead status={"Pending"} record={record} />;
      },
    },
    {
      title: "Failed Leads",
      key: "failed",
      dataIndex: "failed",
      render: (_, record) => {
        return <AgentLead status={"Failed"} record={record} />;
      },
    },
    {
      title: "Not Interested Leads",
      key: "not_interested",
      dataIndex: "not_interested",
      render: (_, record) => {
        return <AgentLead status={"Not Interested"} record={record} />;
      },
    },
    {
      title: "Voice Mail Leads",
      key: "voice_mail",
      dataIndex: "voice_mail",
      render: (_, record) => {
        return <AgentLead status={"Voice Mail"} record={record} />;
      },
    },
    {
      title: "Already Purchased Leads",
      key: "already_purchased",
      dataIndex: "already_purchased",
      width: 220,
      render: (_, record) => {
        return <AgentLead status={"Already Purchased"} record={record} />;
      },
    },
    {
      title: "Sale Leads",
      key: "sale",
      dataIndex: "sale",
      render: (_, record) => {
        return <AgentLead status={"Sale"} record={record} />;
      },
    },
    {
      title: "Hot Leads",
      key: "hot_leads",
      dataIndex: "hot_leads",
      render: (_, record) => {
        return <AgentLead status={"Hot Lead"} record={record} />;
      },
    },
    {
      title: "Exchange",
      key: "exchange",
      dataIndex: "exchange",
      render: (_, record) => {
        return <AgentLead status={"Exchange"} record={record} />;
      },
    },
    {
      title: "No Response",
      key: "No Response",
      dataIndex: "No Response",
      render: (_, record) => {
        return <AgentLead status={"No Response"} record={record} />;
      },
    },
    {
      title: "Quotation Given",
      key: "Quotation Given",
      dataIndex: "Quotation Given",
      render: (_, record) => {
        return <AgentLead status={"Quotation Given"} record={record} />;
      },
    },
  ];

  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchTrackedAgents(pagination.current, pagination.pageSize);
  };
  return (
    <div>
      <Table
        locale={{ emptyText: "No Data available" }}
        columns={columns}
        dataSource={agents}
        scroll={{ y: 450, x: "max-content" }}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: TotalData,
          showSizeChanger: true,
          pageSizeOptions: ["500", "1000", "1500", "2000", "2500", "3000"],
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentPageSize(pageSize);
            fetchTrackedAgents(page, pageSize);
          },
        }}
        onChange={handleTablePageChange}
        rowClassName={(record, index) => {
          // You can apply a different class based on the index or record
          return `row-${index % 5}`; // Example: Apply 5 different row colors
        }}
      ></Table>
      <style>
        {`
        
        * You can change the colors to whatever you'd like */
:where(.css-dev-only-do-not-override-1uq9j6g)[class^="ant-table"] [class^="ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class*=" ant-table"] [class^="ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class^="ant-table"] [class*=" ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class*=" ant-table"] [class*=" ant-table"] {
  background: antiquewhite !important; /* Light Blue */
}
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-table-wrapper table{
  background: antiquewhite !important;
  }

.row-1 {
  background-color: #8bdaff !important; /* Lighter Blue */
}

.row-2 {
  background-color: #f5a7c6 !important; /* Light Pink */
}

.row-3 {
  background-color: #f7f790 !important; /* Light Yellow */
}

.row-4 {
  background-color: #83ef83 !important; /* Light Green */
}

/* Optional: add hover effect for better UX */
.ant-table-tbody tr:hover {
  background-color: #f5f5f5 !important;
}
        `}
      </style>
    </div>
  );
}
