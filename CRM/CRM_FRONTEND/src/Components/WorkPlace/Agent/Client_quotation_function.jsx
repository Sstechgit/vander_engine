// Client_quotation_function.js
import React, { useState } from "react";
import { Button } from "antd";
import Add_Quotation from "./Add_Quotation";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import { getErrors } from "../../../Utils/ExtractError";

export default function Client_quotation_function({
  record,
  setload,
  Editdata,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, seterrors] = useState({});
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Edit Modal function
  const EditQuatation = async ({
    part,
    year,
    make,
    model,
    variant,
    pricing,
    miles,
    stock,
    description,
    setErrors,
  }) => {
    // setload({
    //   spin: true,
    //   tip: "Loading",
    // });
    let url = urls.editQuotation;
    let body = JSON.stringify({
      part,
      year,
      make,
      model,
      variant,
      pricing,
      miles,
      stock,
      description,
      quotationId: record.key,
    });
    let extHeader = {
      "Content-Type": "application/Json",
    };

    let result = await DoFetch(url, "PUT", body, extHeader);
  
    if (result.success == true) {
      await Editdata();
      // setload({
      //   spin: false,
      //   tip: "",
      // });
      return true;
    } else {
      let err = getErrors(result, [
        "part",
        "year",
        "make",
        "model",
        "variant",
        "pricing",
        "miles",
        "stock",
        "description",
      ]);
      if (err.date) {
        alert(err.date);
      }
      setErrors(err);
      // setload({
      //   spin: false,
      //   tip: "",
      // });
      return false;
    }
  };
  // Add To Vandar Engines

  const AddToVandar = async () => {
    let url = urls.addToVander;
    // console.log(url);
    const extHeader = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      Quotation_id: record.key,
    });
    // console.log(body);
    const result = await DoFetch(url, "POST", body, extHeader);

    if (result.success === true) {
      alert("Quatation is added to Vander Engines");
      await Editdata()
      return true;
    } else {
      let err = getErrors(result, ["Quotation_id"]);
      if (err.system) {
        alert(err.system);
      }
      seterrors(err);
      return false;
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{ color: "green", border: "1px solid green" }}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </Button>
      <Button type="primary" disabled={record.saved} onClick={AddToVandar}>
        Add To Vandar Engines
      </Button>
      <Add_Quotation
        isModalOpen={isModalOpen}
        record={record}
        handleCancel={handleCancel}
        onClick={EditQuatation}
        parameter={true}
      />
    </div>
  );
}
// Quotation_id
