import React from "react";
import LowerHeader from "../Includes/LowerHeader";
import Basket from "./Basket";

export default function View_Cart() {
  return (
    <>
      <div className="home text-white mb-3">
        <LowerHeader />
      </div>
      <Basket/>
    </>
  );
}
