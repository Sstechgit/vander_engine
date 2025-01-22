import { Button, Modal, Table } from "antd";

import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { getErrors } from "../../../Utils/ExtractError";
import EditYard from "./EditYard";
export default function ({ record, fetchTask }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const [yard, setYard] = useState("");
  const [errors, seterrors] = useState({});
  const [yardNames, setyardNames] = useState([]);
  const [yardname, setYardname] = useState(record.yardname);
  const showModal = async () => {
    // await handleFetchNotes()
    setModalOpen(true);
  };
  const handleOk = () => {
    setModalOpen(false);
  };

  //delete yard name
  const Deleteyard = async (yardname) => {
    const url = urls.deleteYard;
    const extHeader = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      taskId: record.key,
      oldYard: yardname,
    });
    const result = await DoFetch(url, "POST", body, extHeader);
    if (result.success === true) {
      // Remove the deleted yard from the state
      setyardNames((prevYardNames) =>
        prevYardNames.filter((yard) => yard.yardname !== yardname)
      );
      alert("Yard Name is Deleted");
    } else {
      let err = getErrors(result, ["taskId"]);
      if (err.date) {
        alert(err.date);
      }
      seterrors(err);
    }
  };
  //
  const columns = [
    {
      title: "S.No",
      key: "s_no",
      dataIndex: "s_no",
      width: 100,
    },
    {
      title: "Yard Name",
      key: "yardname",
      dataIndex: "yardname",
      width: 300,
    },
    {
      title: "Edit",
      key: "edit",
      dataIndex: "edit",
      render: (_, records) => {
        return (
          <EditYard
            record={records}
            taskId={record.key}
            fetchTask={fetchTask}
            handleOk={handleOk}
          />
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      dataIndex: "delete",
      render: (_, record) => {
        return (
          <Button
            style={{ color: "red", border: "1px solid red" }}
            onClick={() => {
              Deleteyard(record.yardname);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        );
      },
    },
  ];
  useEffect(() => {
    let data = record.yard?.map((e, idx) => {
      return {
        key: idx,
        s_no: idx + 1,
        yardname: e,
      };
    });
    setyardNames(data);
  }, [record]);
  // console.log(record.yard);
  const onchangeYard = (e) => {
    setYard(e.target.value);
  };
  const addYard = async () => {
    const url = urls.addYard;
    const body = JSON.stringify({
      taskId: record.key,
      yard,
    });
    const extHeader = {
      "Content-Type": "application/json",
    };
    const result = await DoFetch(url, "POST", body, extHeader);
    if (result.success === true) {
      alert("Yard is added in list");
      setYard("");
    } else {
      let errors = getErrors(result, ["yard"]);
      seterrors(errors);
      if (errors.msg) {
        alert(errors.msg);
      }
    }
  };
  return (
    <div className="flex gap-4">
      <div>
        <Input
          type="text"
          placeholder="text"
          value={yard}
          onChange={onchangeYard}
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
          {errors?.yard ? errors.yard : ""}
        </span>
      </div>
      <Button
        disabled={yard === ""}
        onClick={addYard}
        className=" ml-2"
        type="primary"
      >
        Save
      </Button>

      <Button className=" ml-2" type="primary" ghost onClick={showModal}>
        Show
      </Button>
      {ModalOpen && (
        <Modal
          width={1200}
          open={ModalOpen}
          onCancel={handleOk}
          footer={[
            <Button key="ok" onClick={handleOk}>
              Ok
            </Button>,
          ]}
        >
          <Table locale={{ emptyText: 'No Data available' }} columns={columns} dataSource={yardNames}></Table>
        </Modal>
      )}
    </div>
  );
}
