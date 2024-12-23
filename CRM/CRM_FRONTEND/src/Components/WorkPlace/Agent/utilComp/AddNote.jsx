import { Button, DatePicker, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DoFetch } from "../../../../Utils/DoFetch";
import React, { useState } from "react";
import { urls } from "../../../../../links";
import { getErrors } from "../../../../Utils/ExtractError";
import dayjs from "dayjs";

export default function AddNote({ record}) {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const onChange = (date) => {
  
    setDate(date|| null);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {

    const url = urls.addnote;
    const extHeader = {
      "Content-Type": "application/json",
    };
  
    let formattedDate=dayjs(date).format("YYYY-MM-DD")
    const body = JSON.stringify({
      title,
      description,
      date:formattedDate,
      type:record.type,
      id:record.key,
      infoId:(record.type=="leads")?record.leadId:record.orderId
    });
    const result = await DoFetch(url, "POST", body, extHeader);
    if (result.success === true) {
      alert("Note is added");
    } else {
      let err = getErrors(result, ["title", "description", "date"]);
      if (err.date) {
        alert(err.date);
      }
      setErrors(err);
    }
    setDate(null)
    setDescription("")
    setTitle("")
    setIsModalOpen(false);
  };
  const handleCancel = () => {
     setDate(null)
    setDescription("")
    setTitle("")
    setIsModalOpen(false);
  };
  return (
    <div className="flex gap-4 items-center">
      <DatePicker value={date} onChange={onChange} width={200} format="YYYY-MM-DD" />
      <Button type="primary" disabled={date === null} onClick={showModal}>
        Add
      </Button>
      <Modal
        className="text-center text-5xl"
        title="Add Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="mb-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.title ? errors.title : ""}
          </span>
        </div>
        <div className="mb-4">
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.description ? errors.description : ""}
          </span>
        </div>
      </Modal>
    </div>
  );
}
