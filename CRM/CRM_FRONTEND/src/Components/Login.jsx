import React, { useEffect, useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import InputField from "../Utils/InputField";
import { message } from "antd";

import { urls } from "../../links";
import { getErrors } from "../Utils/ExtractError";

import { useNavigate } from "react-router-dom";
const Login = () => {
  // State to toggle between sign up and sign in forms
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [errors, seterrors] = useState({});
  const navigate = useNavigate();
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const PasswordToogle = () => {
    setshowPassword((prev) => !prev);
  };
  const Login = async (e) => {
    e.preventDefault();
    seterrors({});
    let url = urls.LOGIN;
  
    let body = {
      email,
      password,
      designation: selectedRole,
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
      let accessToken = result.payload.accessToken;
      let refreshToken = result.payload.refreshToken;
      
      sessionStorage.setItem("accessT", accessToken);
      sessionStorage.setItem("refreshT", refreshToken);
      sessionStorage.setItem("name", result.payload.name);
      sessionStorage.setItem("designation", result.payload.designation);
  
      // ✅ Store agent ID (userId) in localStorage
      localStorage.setItem("userId", result.payload.userId);
      let agentId = localStorage.getItem("userId");
      console.log(agentId)

  
      // Redirect based on designation
      if (result.payload.designation === 'Admin') {
        // navigate("/twofactor");  // Navigate to /admin
        navigate("/crm/admin");  // Navigate to /admin
      } else if (result.payload.designation === 'Agent') {
        navigate("/crm/agent");
      }
    } else {
      let errorObj = getErrors(result, ["email", "password", "designation"]);
      seterrors((prev) => {
        return { ...prev, ...errorObj };
      });
      if (errorObj?.system) {
        alert(errorObj["system"]);
      }
    }
  };
  
  const Register = async (e) => {
    e.preventDefault();
    seterrors({});

    let url = urls.REGISTER;

    let body = {
      email,
      phone,
      password,
      designation: selectedRole,
      name,
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
      messageApi.info(
        "Congrats! You are Registered now. Please Login to continue"
      );
    } else {
      let errorObj = getErrors(result, [
        "email",
        "phone",
        "password",
        "designation",
        "name",
      ]);
      seterrors((prev) => {
        return { ...prev, ...errorObj };
      });
      if (errorObj?.system) {
        alert(errorObj["system"]);
      }
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("accessT")) {
      navigate("crm");
    }
  }, []);
  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="main-login">
      <div className="container flex align-middle justify-center h-full">
        <div className="welcome ">
          <div
            className="pinkbox"
            style={{
              transform: isSignUp ? "translateX(80%)" : "translateX(0%)",
            }}
          >
            {/* Sign Up Form */}
            <div
              className={`signup ${isSignUp ? "" : "nodisplay"
                } flex flex-col items-center justify-center`}
            >
              {contextHolder}
              {/* <h1>register</h1> */}
              <img src="/images/signup.png" alt="" width={120} />
              <form
                className=" h-full  p-2 flex flex-col items-center gap-4 "
                onSubmit={Register}
              >
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
                    icon={
                      showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                    }
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
                    </div>
                    <span className="w-[80%] text-red-600 transition-all duration-300 text-md  font-['Poppins'] h-8 ">
                      {errors?.designation ? errors.designation : ""}
                    </span>
                  </div>
                  <button className=" py-1 px-4 text-lg hover:bg-blue-700 font-['Poppins'] mr-16  bg-blue-500 text-white ">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Sign In Form */}
            <div
              className={`signin ${isSignUp ? "nodisplay" : ""
                } flex flex-col items-center justify-center`}
            >
              {/* <h1>Log In</h1> */}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/480/184/small_2x/login-click-with-cursor-3d-icon-model-cartoon-style-concept-render-illustration-png.png"
                alt=""
                width={150}
              />
              <form
                className="h-full bg-[#1ACA81] p-2 flex flex-col items-center gap-4 "
                onSubmit={Login}
              >
                <div className=" flex-1 flex flex-col justify-center items-center gap-8 ">
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
                    placeholder="Enter Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    icon={
                      showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                    }
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
                    </div>
                    <span className="w-[80%] text-red-600 transition-all duration-300 text-md  font-['Poppins'] h-8 ">
                      {errors?.designation ? errors.designation : ""}
                    </span>
                  </div>
                  <button className="p-2 px-4 text-xl hover:bg-blue-700 font-['Poppins'] mr-16  bg-blue-500 text-white ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Left Box */}
          <div className="leftbox">
            <h2 className="title">
              <span>Welcome Back </span>To
              <br />
              SS CRM
            </h2>
            {/* <p className="desc">
              Pick your perfect <span>bouquet</span>
            </p> */}
            <img
              className="flower smaller"
              src="https://shivlab.com/wp-content/uploads/2022/09/why_we_use_functional_testing_for_our_business.png"
              alt="flower"
            />
            <p className="account">Have an account?</p>
            <Button className="button" onClick={handleSignInClick}>
              Login
            </Button>
          </div>

          {/* Right Box */}
          <div className="rightbox">
            <h2 className="title">
              <span>Welcome Back </span>To
              <br />
              SS CRM
            </h2>
            {/* <p className="desc">
              Pick your perfect <span>bouquet</span>
            </p> */}
            <img
              className="flower"
              src="https://shivlab.com/wp-content/uploads/2022/09/why_we_use_functional_testing_for_our_business.png"
              alt="flower"
            />
            <p className="account">Don't have an account?</p>
            <Button className="button" onClick={handleSignUpClick}>
              Sign Up
            </Button>
          </div>
        </div>
        <style>
          {`
          /* App.css */

.main-login{
height:100vh;
background:url(https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830028.jpg);
background-size:contain;
}

.welcome {
  background: #f9f9f0;
  width: 650px;
  height: 415px;
  position: absolute;
  top: calc(50% - 207.5px);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.pinkbox {
  position: absolute;
  top: -10%;
  left: 5%;
  background: #1aca81;
  width: 330px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  z-index: 2;
      padding: 0 10px;
}

.nodisplay {
  display: none;
  transition: all 0.5s ease;
}

.leftbox,
.rightbox {
  position: absolute;
  width: 50%;
  transition: 1s all ease;
}

.leftbox {
  left: 0%;
}
.rightbox {
  right: -2%;
}

h1 {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 95px;
  text-transform: uppercase;
  color: #fff;
  font-size: 2em;
  letter-spacing: 8px;
}

.title {
  font-family: 'Lora', serif;
  color: #8e9aaf;
  font-size: 1.8em;
  line-height: 1.1em;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 300;
  margin-top: 20%;
}
.desc {
  margin-top: -8px;
}
.account {
  margin-top: 45%;
  font-size: 14px;
}
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7em;
  letter-spacing: 2px;
  color: #033c9f;;
  text-align: center;
}

span {
  color: #1aca81;
}

.flower {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 46%;
  left: 29%;
}

.smaller {
  width: 90px;
  height: 100px;
  top: 48%;
  left: 38%;
  opacity: 0.9;
}

.button {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
  border-radius: 10px;
  margin: auto;
  outline: none;
  display: block;
  border-color: #554949;
}

.button:hover {
  background: #eac7cc;
  color: #fff;
  transition: background-color 1s ease-out;
}

.submit {
  margin-top: 25px;
}

          `}
        </style>
      </div>
    </div>
  );
};

export default Login;
