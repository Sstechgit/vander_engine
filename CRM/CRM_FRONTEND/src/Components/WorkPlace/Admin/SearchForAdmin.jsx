import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Select, Space, Table } from "antd";
import { DoFetch } from "../../../Utils/DoFetch";
import { urls } from "../../../../links";
import AgentLead from "./AgentLead";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";
const { Search } = Input;
const suffix = <AudioOutlined />;

const SearchForAdmin = () => {
  const [value, setvalue] = useState("");
  const [data, setdata] = useState([]);
  const [selectedType, setselectedType] = useState("client");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [TotalData, setTotalData] = useState(0);
  const onSearch = async (value, _e, info) => {
    setvalue(value);
    await searchFunction(value,currentPage,pageSize);
  };
  const searchFunction = async (val,page,pageRows) => {
    const url = urls.search + "/" + selectedType;
    let extHeader = {
      value: val,
    };
    let result = await DoFetch(url, "GET", null, extHeader);
 
    if (result.success === true) {
      if (selectedType == "client") {
        let records = [];

        result.payload.records.forEach((lead, idx) => {
          records.push({
            key: lead._id,
            _id: ((page - 1) * pageRows) + idx + 1,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            description: lead.description,
            origin: lead?.origin,
            created: parseCustomDate(lead?.createdAt),
            assigned: lead.task[0]?._id ? true : false,
            agent: lead.user[0]||{},
            task: lead.task[0]||{},
          });
        });
        setdata(records);
        setTotalData(records.length);
      } 
      else {
        let agent = [];
        result.payload.records.forEach((e, idx) => {
          agent.push({
            id: idx + (page - 1) * pageRows + 1,
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
          });
        });
        setdata(agent);
        setTotalData(agent.length);
      }
    }
  };
  const options = [
    { value: "agent", label: "Search By Agent" },
    { value: "client", label: "Search By Client" },
  ];
  const columnsForAgent = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "Agent Name",
      key: "name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Last Login",
      key: "last_login",
      dataIndex: "last_login",
      width: 150,
      render: (_, record) => {
        return <span>{_?formatDate(_):""}</span>;
      },
    },
    {
      title: "Last Logout",
      key: "last_logout",
      dataIndex: "last_logout",
      width: 150,
      render: (_, record) => {
        return <span>{_?formatDate(_):""}</span>;

      },
    },
    {
      title: "Completed Leads",
      key: "completed",
      dataIndex: "completed",
      render: (_, record) => {
        return <AgentLead status={"Completed"} record={record} />;
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
      width: 200,
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
  ];
  //header for table
  const columnsforLeads = [
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
      key: "Task",
      title: "Task",
      dataIndex: "Task",
      width: 160,
      render: (_, record) => {
        return <p>{record.task.state||"Unassigned"}</p>;
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
  const handleChange = (value) => {
    setselectedType(value);

    setdata([])
  };
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);

  };

  return (
    <>
      <Space
        direction="vertical"
        style={{ width: "100%", padding: "20px", backgroundColor: "#f0f2f5" }}
      >
        <Search
          placeholder="search with agent name or search with client name"
          onSearch={onSearch}
          enterButton
        />
        <Select
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          value={selectedType}
          onChange={handleChange}
          options={options}
        />
      </Space>
      <Table locale={{ emptyText: 'No Data available' }}
        style={{ maxWidth: "100%" }}
        columns={selectedType == "client" ? columnsforLeads : columnsForAgent}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: TotalData,
          showSizeChanger: true,
          pageSizeOptions: ["2", "10", "15", "20", "25", "30"],
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentPageSize(pageSize);
            fetchOrders(page, pageSize);
          },
        }}
        scroll={{ y: 300, x: "max-content" }} // Ensure table content is scrollable
        onChange={handleTablePageChange}
      ></Table>
    </>
  );
};
export default SearchForAdmin;
