import { MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { urls } from "../../links";
import { getErrors } from "../Utils/ExtractError";
import { useNavigate } from "react-router-dom";

export default function Super({setload}) {
    const [errors, seterrors] = useState({})
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()

    const Login = async (e) => {
        e.preventDefault();
        setload({
          spin:true,tip:"Loading"
        })
        seterrors({});
        setload({
          spin:true,tip:"Loading"
        })
    
        let url = urls.LOGIN;
    
        let body = {
          email,
          password,
          designation: 'super',
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
          let accessToken=result.payload.accessToken;
          let refreshToken=result.payload.refreshToken;
          sessionStorage.setItem("SaccessT",accessToken)
          sessionStorage.setItem("SrefreshT",refreshToken)
          sessionStorage.setItem("Sname",result.payload.name)
          sessionStorage.setItem("Sdesignation",result.payload.designation)
    
    
          navigate("/crm")
    
        } else {
          let errorObj = getErrors(result, ["email", "password","designation"]);
          seterrors((prev) => {
            return { ...prev, ...errorObj };
          });
          if (errorObj?.designation) {
            alert(errorObj["designation"]);
          }
          if (errorObj?.system) {
            alert(errorObj["system"]);
          }
        
        }
        setload({
          spin:false,tip:""
        })
      };
  return (
    <div className="w-screen h-screen before:w-full before:h-full before:content-[''] before:blur-sm before:absolute before:inset-0 before:bg-[url('/images/adminnew.png')] before:opacity-20 before:bg-center before:bg-no-repeat before:bg-cover before:-z-1 z-1 bg-slate-800 overflow-y-hidden flex items-center justify-center ">
      <div className="w-[45rem] p-2 flex flex-col gap-4 items-center h-[25rem]">
        <p className="text-5xl font-bold my-8 mb-20 text-white">
          LOGIN AS SUPER ADMIN
        </p>
        <div className="w-3/4 ">
          <Input
            placeholder="Enter Email Here"
            size="large"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            prefix={<MailOutlined className="mr-2" />}
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md">{errors.email?errors.email:""}</span>
        </div>
        <div className="w-3/4">
            
            <Input.Password size="large" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
            <span className="w-full h-4 text-red-500  transition-all duration-300 text-md">{errors.password?errors.password:""}</span>
        </div>
        <div className="w-3/4 flex justify-end p-4">
          <Button type="primary" onClick={Login}>Login</Button>
        </div>
      </div>
    </div>
  );
}
