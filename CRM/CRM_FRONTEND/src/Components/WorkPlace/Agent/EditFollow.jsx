import { Button, DatePicker, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import dayjs from "dayjs";
export default function EditFollow({ record, fetchnotes , setload}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, settitle] = useState(record.title);
  const [description, setDescription] = useState(record.desc);
  const [date, setDate] = useState(dayjs(record.date));
  const onChange = (date) => {
    setDate(date || null);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(EditAgent());
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //---------------------------------------
  //Edit Modal function
  const EditAgent = async () => {
    // seterrors([]);
    // setload({
    //   spin:true,tip:"Loading"
    // })
    let url = urls.EditFollowUp;
    let formattedDate = dayjs(date).format("YYYY-MM-DD");
    let body = JSON.stringify({
      id: record._id,
      title,
      description,
      date: formattedDate,
    });
    // console.log("edit", body);
    let extHeaders = {
      "Content-Type": "application/json",
    };
    let result = await DoFetch(url, "PUT", body, extHeaders);
    // console.log(result)
    if(result.success==true){
      await fetchnotes()
    }
    // setload({
    //   spin:false,tip:""
    // })
  };
  //---------------------------------------
  return (
    <div>
      <Button
        style={{ color: "green", border: "1px solid green" }}
        onClick={showModal} 
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </Button>
      <Modal
        title="Edit Note"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button key="ok" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <DatePicker
          value={date}
          onChange={onChange}
          width={200}
          format="YYYY-MM-DD"
        />
      </Modal>
    </div>
  );
}
