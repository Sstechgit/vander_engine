import { Button, message, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import EditNote from "./EditNote";
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

export default function ViewNote({ record , setload}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setnotes] = useState([]);
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
    setnotes([])
    setload({
      spin:true,tip:"Loading"
    })

    let url = urls.getByKey;
    let extHeader = {
      key: record.key,
    };
    let result = await DoFetch(url, "GET", null, extHeader);
    // console.log(result);
    if (result.success === true) {
      let note = [];
      result.payload.forEach((e) => {
        note.push({
          _id: e._id,
          title: e.title,
          date: e.date,
          desc: e.description,
        });
      });
      setnotes(note);
    }
    setload({
      spin:false,tip:""
    })
  };
  useEffect(() => {
    handleFetchNotes();
  }, []);
  //Delete Note

  const handleDelete = async (record, Selected = false) => {
    let confirmDelete = confirm(`Do you want to delete ${1} Note?`);
    if (!confirmDelete) {
      return;
    }
    setload({
      spin:true,tip:"Deleting"
    })
    let url = urls.deletenote;
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

  //Edit Note

  //-------------------------
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
        return (
            <EditNote record={record} fetchnotes={handleFetchNotes} setload={setload}/>
        );
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
            <i class="fa-solid fa-trash-can"></i>
          </Button>
        );
      },
    },
  ];
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div className="flex items-center">
      <Button type="primary" onClick={showModal}>
        Show
      </Button>

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
              total: notes.length,
              showSizeChanger: true,
              defaultPageSize:4,
              pageSizeOptions: ["2", "4", "10", "15", "20", "25"],
            }}
            columns={columns}
            dataSource={notes}
          />
        </Modal>
      )}
    </div>
  );
}
