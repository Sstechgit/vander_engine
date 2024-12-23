import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Crm from "./WorkPlace/Crm";
import { Spin } from "antd";
import Super from "./Super";
export default function Home() {
  const [load, setload] = useState({
    spin:false,tip:""
  });
  return (
    <Spin size="large" tip={load.tip} spinning={load.spin}>
      <Routes>
        <Route path="/" element={<Login setload={setload} />} />
        <Route path="/Super" element={<Super setload={setload} />} />

        <Route path="/register" element={<Register setload={setload}/>} />
        <Route path="/Crm/*" element={<Crm setload={setload}/>} />
      </Routes>
    </Spin>
  );
}
