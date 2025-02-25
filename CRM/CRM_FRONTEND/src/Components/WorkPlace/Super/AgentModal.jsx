import { Button, Input, Modal } from 'antd';
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";


import React from 'react'

export default function AgentModal({title,ClickFunc,errors,open,setOpen,name,setName,email,setEmail,password,setPassword,parameters=[]}) {
  
  const dropModal = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setPassword("");
  };
  const DoFunction=async()=>{
     await ClickFunc(name,email,password,...parameters)
  }
  return (
  
    <Modal
    title={title}
    open={open}

    onCancel={dropModal}
    footer={[
      <Button  onClick={DoFunction}>
        Save
      </Button>,
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
        rules={[
          { required: true, message: "Please input Agent New Name!" },
        ]}
        
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
      <Input.Password
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        rules={[{ required: true, message: "Please input a Password!" }]}
        placeholder="Enter New Password"
        prefix={<KeyOutlined />}
        className="flex gap-4 "
      />
      <span className="w-full h-4 text-red-500  transition-all duration-300 text-md mb-2">
        {errors?.password ? errors.password : ""}
      </span>
    </div>
  </Modal>
  )
}
