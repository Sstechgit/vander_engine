import React from "react";
import { Button, DatePicker, Input, Modal, Select } from "antd";
import {
  HeatMapOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function LeadModal({
  title,
  ClickFunc,
  errors,
  open,
  setOpen,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  description,
  setDescription,
  origin,
  setOrigin,
  parameters = [],
}) {
  const dropModal = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setDescription("")
    setPhone("")
    setOrigin("")

  };
  const DoFunction = async () => {

    await ClickFunc(name, email, description, origin, phone, ...parameters);
  };
  return (
    <Modal
      title={title}
      open={open}
      onCancel={dropModal}
      footer={[
        <Button key="save" onClick={DoFunction}>Save</Button>,
        <Button key="cancel" onClick={dropModal} danger type="primary">
          Cancel
        </Button>,
      ]}
    >
      <div className="mb-4">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          rules={[{ required: true, message: "Please input Agent New Name!" }]}
          placeholder="Enter New Name"
          prefix={<UserOutlined />}
          className="flex gap-4 "
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
          {errors?.name ? errors.name : ""}
        </span>
      </div>
      <div className="mb-4">
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          rules={[
            { required: true, message: "Please input Agent New Email Id!" },
          ]}
          placeholder="Enter New Email"
          prefix={<MailOutlined />}
          className="flex gap-4 "
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
          {errors?.email ? errors.email : ""}
        </span>
      </div>
      <div className="mb-4">
        <Input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          rules={[{ required: true, message: "Please input a Phone!" }]}
          placeholder="Enter mobile number"
          prefix={<MobileOutlined />}
          className="flex gap-4 "
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md mb-2">
          {errors?.phone ? errors.phone : ""}
        </span>
      </div>
      <div className="mb-4">
        <Input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rules={[{ required: true, message: "Please input a Description!" }]}
          placeholder="Enter a Description"
          prefix={<InfoCircleOutlined />}
          className="flex gap-4 "
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md mb-2">
          {errors?.description ? errors.description : ""}
        </span>
      </div>

      <div className="mb-4">

        <Select
          defaultValue="Vander Engines"
          value={origin}
          onChange={(value) => setOrigin(value)} // Directly receive value
          style={{ width: '100%' }} // Correct property name for inline styles
        >
          <Option value="Vander Engines">Vander Engines</Option>
          <Option value="USA AUTO PARTS LLC">USA Auto Parts LLC</Option>
          <Option value="Facebook">Facebook</Option>
          <Option value="AutoPartsLeads">Auto Parts Lead</Option>
        </Select>



        <span className="w-full h-4 text-red-500 transition-all duration-300 text-md mb-2">
          {errors?.origin ? errors.origin : ""}
        </span>
      </div>
    </Modal>
  );
}
