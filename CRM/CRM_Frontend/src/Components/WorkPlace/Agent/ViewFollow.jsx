import { Button, Modal, Table } from 'antd'
import React, { useState } from 'react'
import EditNote from './EditNote';
import { urls } from '../../../../links';
import { DoFetch } from '../../../Utils/DoFetch';
import EditFollow from './EditFollow';

// rowSelection object indicates the need for row selection
const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

 

export default function ViewFollow({record , setload}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectionType, setSelectionType] = useState("checkbox");
    const [follow, setfollow] = useState([]);

    const showModal = async() => {
        await handleFetchNotes()
        setIsModalOpen(true);
      };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  const handleFetchNotes = async () => {
    setfollow([])
    setload({
      spin:true,tip:"Loading"
    })

    let url = urls.followupKey;
    let extHeader = {
      key: record.recordId,
    };
    let result = await DoFetch(url, "GET", null, extHeader);

    if (result.success === true) {
      let follow = [];
      result.payload.forEach((e) => {
        follow.push({
          _id: e._id,
          title: e.title,
          date: e.date,
          desc: e.description,
        });
      });
      setfollow(follow);
    }
    setload({
      spin:false,tip:""
    })
  };
 (() => {
    handleFetchNotes();
  }, []);
  //Delete Note

  const handleDelete = async (record, Selected = false) => {
    let confirmDelete = confirm(`Do you want to delete ${1} Follow Up?`);
    if (!confirmDelete) {
      return;
    }
    setload({
      spin:true,tip:"Deleting"
    })
    let url = urls.deleteFollowup;
    let extHeader = {
      deleteId: record._id,
    };
    let result = await DoFetch(url, "DELETE", null, extHeader);
 
    if (result.success == true) {
      await handleFetchNotes();
    } else {
      alert("Server Side Issue");
    }
    setload({
      spin:false,tip:""
    })
  };

 //-------------------------Columns----------
 const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },

    {
      title: " ",
      dataIndex: "edit-note",
      key: "edit-note",
      render: (_, record) => {
        return <EditFollow record={record} fetchnotes={handleFetchNotes}setload={setload}/>;
      },
    },
    {
      title: " ",
      dataIndex: "delete-note",
      key: "delete-note",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {
              handleDelete(record);
            }}
            style={{ color: "red", border: "1px solid red" }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        );
      },
    },
  ];

//-------------------------datasource--------------------
  const  folllowup_data = [
    {
        date : '10-10-2024' ,
        title : 'Engine',
        desc : 'Toyota Camry',
    }
  ]


  return (
    <div>
        <Button type='primary' className='AddFollow bg-orange-400 text-white' onClick={showModal} > View</Button>
        {isModalOpen && (
        <Modal
          className="text-center"
          title="Show Details"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
          footer={[
            <Button key="ok" onClick={handleOk}>
              Ok
            </Button>,
          ]}
        >
          <Table locale={{ emptyText: 'No Data available' }}
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            pagination={{
            //   total: notes.length,
              showSizeChanger: true,
              defaultPageSize:4,
              pageSizeOptions: ["2", "4", "10", "15", "20", "25"],
            }}
            columns={columns}
            dataSource={follow}
          />
        </Modal>
      )}
    </div>
  )
}
