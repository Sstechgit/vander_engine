import React, { useState } from "react";
import { Button, DatePicker, Input, Modal, Select } from "antd";
import {
  HeatMapOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function AgentAddLead({
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
  Deadline,
  setdeadline,
  parameters = [],
}) {
  const [localErrors, setLocalErrors] = useState({});
  const dropModal = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setDescription("")
    setPhone("")
    setOrigin("")
    setdeadline("")
    setLocalErrors({});
  };
  const handleDate = (value) => {

    setdeadline(value.$d);
  };
  const validateInputs = () => {
    let errors = {};
    if (!name.trim()) errors.name = "Name is required!";
    // Email validation (checks for a valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required!";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email address!";
    }

    // Phone validation (exactly 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phone.trim()) {
      errors.phone = "Phone number is required!";
    } else if (!phonePattern.test(phone)) {
      errors.phone = "Enter a valid 10-digit phone number!";
    }
    if (!description.trim()) errors.description = "Description is required!";
    if (!Deadline) errors.Deadline = "Deadline is required!";
    if (!origin) errors.origin = "Origin is required!";

    setLocalErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const DoFunction = async () => {
    if (!validateInputs()) return;
    await ClickFunc(name, email, description, origin, phone, Deadline, ...parameters);
    dropModal();
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
        <span className="text-red-500 text-sm">{localErrors.name}</span>
      </div>
      <div className="mb-4">
        <Input
          value={email}
          type="email"
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
        <span className="text-red-500 text-sm">{localErrors.email}</span>
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
        <span className="text-red-500 text-sm">{localErrors.phone}</span>
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
        <span className="text-red-500 text-sm">{localErrors.description}</span>
      </div>
      <div className="mb-4">
        <DatePicker
          onChange={handleDate}
          style={{
            width: "100%",
          }}
          required
        />
        <span className="text-red-500 text-sm">{localErrors.Deadline}</span>
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

        <span className="text-red-500 text-sm">{localErrors.origin}</span>


      </div>
    </Modal>
  );
}
