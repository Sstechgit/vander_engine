import React, { useState } from "react";
import { urls } from "../../links";
import { getErrors } from "../Utils/ExtractError";
import { useNavigate } from "react-router-dom";

const SuperAdmin = () => {
    const [showPassword, setShowPassword] = useState("true")
    const [errors, seterrors] = useState({})
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const Login = async (e) => {
        e.preventDefault();
        seterrors({});
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
            let accessToken = result.payload.accessToken;
            let refreshToken = result.payload.refreshToken;
            sessionStorage.setItem("SaccessT", accessToken)
            sessionStorage.setItem("SrefreshT", refreshToken)
            sessionStorage.setItem("Sname", result.payload.name)
            sessionStorage.setItem("Sdesignation", result.payload.designation)
            navigate("/crm")
        } else {
            let errorObj = getErrors(result, ["email", "password", "designation"]);
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
    };
    return (
        <>
            <div className="super h-[100vh] flex items-center justify-center">
                <div className="super-form flex items-center h-full justify-center">
                    <article>
                        <header>Super Admin Login</header>
                        <label className="mb-4" for="username">
                            <span className="pb-2">Username:</span>
                            <input placeholder="Username" name="username" type="email"
                             value={email}
                             onChange={(e)=>setemail(e.target.value)}
                            required />
                        </label>
                        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md">{errors.email?errors.email:""}</span>
                        <label className="" for="username">
                            <span className="pb-2">Password:</span>
                            <div className="relative">
                                <input
                                    className="p-2 w-full pr-10"
                                    placeholder="Password"
                                    name="password"
                                    value={password} onChange={(e)=>setpassword(e.target.value)}
                                    type={showPassword ? "password" : "text"}
                                    required
                                />
                                <span
                                    className="absolute right-2 top-3 text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} text-lg`}></i>
                                </span>
                            </div>
                        </label>
                        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md">{errors.password?errors.password:""}</span>
                        <button type="submit" onClick={Login}>Submit</button>
                    </article>
                </div>
            </div>
            <style>
                {`
            .super-form{
            width:400px;
            position:relative;
            }
            .super{
                background-color: #2c3338;
                color: #fff;    
            }
           article {
                backdrop-filter: blur(10px);
                background-color: hsla(0, 0%, 100%, .13);
                border: 2px solid hsla(0, 0%, 100%, .1);
                border-radius: 10px;
                box-shadow: 0 0 40px rgba(8, 7, 16, .6);
                display: flex;
                flex-direction: column;
                margin: 2rem 0;
                padding: 50px 35px;
                position: relative;
                z-index: 3;
            }
                header {
                display: flex;
                font-size: 32px;
                font-weight: 500;
                gap: var(--gap);
                justify-content: center;
                line-height: 42px;
                padding-bottom: 2rem;
                text-align: center;
                }
                input{
                display:block;
                height: 46px;
                width: 100%;
                padding: 0 10px;
                background:#37373e;
                border: none;
                }
            input:focus{
                outline:none;
                }
            button {
    background-color: #fff;
    border: 0;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    margin-top: 30px;
    min-width: 80px;
    padding: 10px 0;
    position: relative;
    text-transform: uppercase;
    transition: background-color .3s;
    width: 100%;
    z-index: 1;
                }
   .super-form:before {
    border-radius: 50%;
    content: "";
    display: block;
    height: 200px;
    position: absolute;
    width: 200px;
    background:  linear-gradient(#1845ad, #23a2f6);
    left: -50px;
    top: -20px;
}
    .super-form:after{
    border-radius: 50%;
    content: "";
    display: block;
    height: 200px;
    position: absolute;
    width: 200px;
    background: linear-gradient(90deg, #ff512f, #f09819);
    bottom: -20px;
    right: -50px;
    }

            `}
            </style>
        </>
    )
}
export default SuperAdmin;