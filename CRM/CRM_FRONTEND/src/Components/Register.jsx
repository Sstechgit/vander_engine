import React, { useEffect, useState } from "react";

import "./Login_Register.css";
import InputField from "../Utils/InputField";
import {message } from 'antd';
import { urls } from "../../links";
import { getErrors } from "../Utils/ExtractError";

import { useNavigate } from "react-router-dom";
export default function Register({setload}) {
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [errors, seterrors] = useState({});
  const navigate=useNavigate()

  // Handler function to update state based on selected radio button
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const PasswordToogle = () => {
    setshowPassword((prev) => !prev);
  };
  const Register = async (e) => {
    e.preventDefault();
    seterrors({});
    setload({
      spin:true,tip:"Loading"
    })

    let url = urls.REGISTER;

    let body = {
      email,
      phone,
      password,
      designation: selectedRole,
      name
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    let response = await fetch(url, options);
    let result = await response.json();

    if (result.success == true) {
      messageApi.info('Congrats! You are Registered now. Please Login to continue');

    } else {
      let errorObj = getErrors(result, ["email","phone", "password", "designation","name"]);
      seterrors((prev) => {
        return { ...prev, ...errorObj };
      });
      if (errorObj?.system) {
        alert(errorObj["system"]);
      }
    
    }
    setload({
      spin:false,tip:""
    })
  };
  useEffect(()=>{
    if(sessionStorage.getItem("accessT")){
      navigate("/crm")
    }
  },[])
  return (
    <div className="loginArea">
   {contextHolder}

      <div
        className="w-1/2 h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/LeftRegister.jpg')" }}
      ></div>
      <form
        className="w-1/2 h-full bg-[#8762df] p-2 flex flex-col items-center gap-4 "
        onSubmit={Register}
      >
        <p className="w-full text-center text-4xl mt-10  rounded-2xl text-black font-['Poppins']">
          Welcome Back To <span className="text-white font-bold">SS</span> CRM
        </p>
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
        <InputField
            placeholder="Enter Name"
            name="name"
            type="text"
            icon="fa-solid fa-user"
            required={true}
            value={name}
            error={errors?.name}
            changeValue={setName}
          />
          <InputField
            placeholder="Enter Email"
            name="email"
            type="text"
            icon="fa-solid fa-envelope"
            required={true}
            value={email}
            error={errors?.email}
            changeValue={setEmail}
          />
           <InputField
            placeholder="Enter Phone"
            name="phone"
            type="text"
            icon="fa-solid fa-phone"
            required={true}
            value={phone}
            error={errors?.phone}
            changeValue={setPhone}
          />
          <InputField
            placeholder="Enter Password"
            name="password"
            type={showPassword ? "text" : "password"}
            icon={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
            iconClick={PasswordToogle}
            required={true}
            error={errors?.password}

            value={password}
            changeValue={setPassword}
          />
          <div className="w-full flex flex-col items-center p-1 px-2 gap-2">
            <div className="flex items-center w-[80%] gap-4 ">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={handleRoleChange}
                  className="form-radio text-blue-600"
                  required
                />
                <span className="ml-2 text-black font-['Poppins']">
                  Admin
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Agent"
                  onChange={handleRoleChange}
                  className="form-radio text-green-600"
                  required
                />
                <span className="ml-2 text-black font-['Poppins']">
                  Agent
                </span>
              </label>
              <span className="text-sm justify-self-end font-['Poppins'] cursor-pointer text-yellow-300 hover:text-yellow-400" onClick={()=>navigate("/")}>Login ?</span>
            </div>
            <span className="w-[80%] text-red-600 transition-all duration-300 text-md  font-['Poppins'] h-8 ">{errors?.designation?errors.designation:""}</span>
          </div>
          <button className="p-2 px-4 text-xl hover:bg-blue-700 font-['Poppins'] mr-16 rounded-2xl bg-blue-500 text-white self-end">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
