import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

import { Button, message, Pagination, Table } from "antd";

import GeneralHeader from "./GeneralHeader";
import { getErrors } from "../../../Utils/ExtractError";
import AgentModal from "./AgentModal";
import DisplayTableModal from "./DisplayTableModal";

export default function Super_Client({setload}) {
  const [Client, setClient] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setCurrentPageSize] = useState(50);
  const [TotalData, setTotalData] = useState(0);

  const [IsSelection, setIsSelection] = useState(false);
  //states for modal
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, seterrors] = useState({});
  const [password, setPassword] = useState("");
  const [title, settitle] = useState("");
  const [parameters, setparameters] = useState([]);
  const [ModalFunc, setModalFunc] = useState(() => {});
  const [messageApi, contextHolder] = message.useMessage();
  //states for display modal
  const [recordForViewTask, setRecordForViewTask] = useState([])
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const fetchAgents = async (page, pageRows) => {
    // setload({
    //   spin:true,tip:"Loading"
    // })

    let url = urls.GetClients;

    let result = await DoFetch(url);


    if (result.success) {
      let records = [];
      result.payload.forEach((e, idx) => {
        records.push({
          key: e.leads[0].email,
          _id: (page - 1) * pageRows + idx + 1,
          name: e.leads[0].name,
          email: e.email,
 

          Tasks:e.leads[0].task[0],
          User:e.leads[0].user[0],
         
          Leads:e.leads
        });
      });

      setClient(records);
      setTotalData(result.payload.total);
     
    } else {
      alert("Server issue occured");
    }
    // setload({
    //   spin:false,tip:""
    // })
  };
  const AddAgent = () => {
    settitle("Add A New Agent");
    setModalFunc(() => AddNewAgent); //give refrence, dont do setModalFunc(AddNewAgent) as it invoke func automatically
    setName("");
    setEmail("");
    setPassword("");
    setOpen(true);
  };
  //operation array for selection
  const [opArr, setopArr] = useState({
    Refresh: {
      name: <i className="fa-solid fa-arrows-rotate"></i>,
      func: fetchAgents,
      parameters: [currentPage, pageSize],
      danger: false,
    },
    AddAgent: {
      name: <i className="fa-solid fa-user-plus"></i>,
      func: AddAgent,
      parameters: [],
      danger: false,
    },
  });
  const viewTask=(record)=>{

    let arr=[]
    record.Leads.forEach((lead)=>{
      let data={
        email:record.email,
        _id:lead.task[0]._id,
        state:lead.task[0].state,
        name:lead.name,
        user_email:lead.user[0].email,
        description:lead.description,
        origin:lead.origin,
        phone:lead.phone
      }
      arr.push(data)
    })
    
    setRecordForViewTask(arr)
    setOpenTaskModal(true)
  }
  const columns = [
    { key: "_id", title: "Sno", dataIndex: "_id" },
    { key: "name", title: "Client Name", dataIndex: "name" },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "task", title: "Tasks", dataIndex: "TotalTask",render:(_,task)=>{
      return <Button onClick={()=>viewTask(task)}>View Tasks</Button>
    } },
  ];
  const columsForViewTask=[
    { key: "_id", title: "Sno", dataIndex: "_id" },
    { key: "email", title: "Lead email", dataIndex: "email" },
    { key: "name", title: "Lead Name", dataIndex: "name" },
    { key: "phone", title: "Lead Phone", dataIndex: "phone" },
    { key: "description", title: "Lead Description", dataIndex: "description" },
    { key: "agent", title: "Assigned Agent", dataIndex: "user_email" },
    { key: "state", title: "Status", dataIndex: "state" },
    { key: "origin", title: "Origin", dataIndex: "origin" },    
  ]

  //Edit Modal function
;


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
   
      if (selectedRows.length == 0) {
        setIsSelection(false);
      } else {
        setIsSelection(true);
        setopArr((prev) => {
          return {
            ...prev,
            
          };
        });
      }
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  //handle Table page change
  const handleTablePageChange = (pagination) => {
    setCurrentPage(pagination.current);
    setCurrentPageSize(pagination.pageSize);
    fetchAgents(pagination.current, pagination.pageSize);
  };

  useEffect(() => {
    fetchAgents(currentPage, pageSize);
  }, []);
  useEffect(() => {
    if (!IsSelection) {
      setopArr({
        Refresh: {
          name: <i className="fa-solid fa-arrows-rotate"></i>,
          func: fetchAgents,
          parameters: [currentPage, pageSize],
          danger: false,
        },
       
      });
    }
  }, [IsSelection]);
  return (
    <>
      {contextHolder}
    {openTaskModal&&<DisplayTableModal columns={columsForViewTask} datasource={recordForViewTask} open={openTaskModal} setopen={setOpenTaskModal}/>}
      <AgentModal
        title={title}
        ClickFunc={ModalFunc}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        errors={errors}
        open={open}
        setOpen={setOpen}
        parameters={parameters}
      />
      <div className="h-calc-remaining flex flex-col justify-between ">
        <div className="h-[80%]">
          <Table locale={{ emptyText: 'No Client available' }}
            rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={Client}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: TotalData,
              showSizeChanger: true,
              pageSizeOptions: ["50", "100", "200", "300", "400", "500"],
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentPageSize(pageSize);
                fetchLeads(page, pageSize);
              },
            }}
            scroll={{ y: 450 }} // Ensure table content is scrollable
            onChange={handleTablePageChange}
          ></Table>
        </div>
        <div className="flex justify-between m-8">
          <GeneralHeader operations={opArr} />
          {/* <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={TotalData}
            showSizeChanger={true}
            pageSizeOptions={["2", "10", "15", "20", "25", "30"]}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setCurrentPageSize(pageSize);
              fetchAgents(page, pageSize);
            }}
          /> */}
        </div>
      </div>
    </>
  );
}
