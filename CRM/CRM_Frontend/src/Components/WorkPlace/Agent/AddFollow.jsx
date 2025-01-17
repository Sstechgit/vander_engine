import { Button, DatePicker, Input, Modal, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React, { useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { getErrors } from "../../../Utils/ExtractError";

export default function AddFollow({record,setload}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, settitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(null)
  const [errors, setErrors] = useState({})
  const onchange=(dateSource)=>{
    setDate(dateSource||null)
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async() => {
    setload({
      spin:true,tip:"Loading"
    })
    const url = urls.addFollowup
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
      alert("Follow Up is added");
    setIsModalOpen(false);

    } else {
      let err = getErrors(result, ["title", "description", "date"]);
      if (err.date) {
        alert(err.date);
      }
      setErrors(err);
    }
    setDate(null)
    setDescription("")
    settitle("")
    setload({
      spin:false,tip:""
    })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        className="AddFollow bg-orange-400 text-white"
        onClick={showModal}
      >
        Add
      </Button>
      <Modal
        title="Add Follow Up"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key="ok" onClick={handleOk} type="primary">
            Save
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
           
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
        <DatePicker
          value={date}
            onChange={onchange}
          width={200}
          format="YYYY-MM-DD"
        />
      </Modal>
    </div>
  );
}
