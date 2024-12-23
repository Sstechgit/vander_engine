import { Button, DatePicker, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import DescriptionModel from "./DescriptionModel";
import Status from "./Status";
import { width } from "@mui/system";
import ViewFollow from "./ViewFollow";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";
export default function Customer_won({setload}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(10);
  const [task, settask] = useState([]);
  const [TotalData, setTotalData] = useState();
  const fetchTask = async (page, pageRows) => {
    setload({
      spin:true,tip:"Loading"
    })

    let url = urls.getCompletedTasks + `/${page}/${pageRows}`;
    // console.log(url);
    let result = await DoFetch(url);

    if (result.success == true) {
      let record = [];
      let idx = 0;
      // console.log(result)
      result.payload.records.forEach((taskval, idx) => {
        record.push({
          id: idx + 1,
          name: taskval.leads[0].name,
          email: taskval.leads[0].email,
          phone: taskval.leads[0].phone,
          info: taskval.leads[0].description,
          status: taskval.state,
          origin: taskval.leads[0].origin,
          task_assigned_date: parseCustomDate(taskval.leads[0].createdAt),
          deadline: parseCustomDate(taskval.deadline),
          complete_date: parseCustomDate(taskval.updatedAt),
        });

        idx++;
      });

      // console.log(records);
      settask(record);

      setTotalData(result.payload.total);
    } else {
      alert("Server issue occured");
    }
    setload({
      spin:false,tip:""
    })
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Info",
      key: "info",
      dataIndex: "info",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      width:80,
      render: (_, record) => {
        return <p>Lead</p>;
      },
    },
    {
      title: "Origin",
      key: "origin",
      dataIndex: "origin",
    },
    {
      title: "Task assigned date",
      key: "task_assigned_date",
      dataIndex: "task_assigned_date",

      render: (_, record) => {
        let formattedDate = formatDate(_);
        return <p>{formattedDate}</p>;
      },
    },
    {
      title: "Deadline",
      key: "deadline",
      dataIndex: "deadline",

      render: (_, record) => {
        let formattedDate = formatDate(_);
        return <p>{formattedDate}</p>;
      },
    },
    {
      title: "Completion date",
      key: "complete_date",
      dataIndex: "complete_date",

      render: (_, record) => {
        let formattedDate = formatDate(_);
        return <p>{formattedDate}</p>;
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
    <div className="FollowUp">
      <Table
        className="m-2"
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
        scroll={{ y: 400, x: "max-content" }}
      />
    </div>
  );
}
