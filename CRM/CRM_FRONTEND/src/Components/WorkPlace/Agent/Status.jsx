import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function Status({ record, setload }) {
  const [selectVal, setselectVal] = useState(record.status);
  const [changed, setchanged] = useState(true);
  const onchange = (e) => {
    setchanged(false);
    setselectVal(e);
  };
  const changeStatus = async () => {
    let url;
    setload({
      spin: true,
      tip: "Loading",
    });

    if (record.order === true) {
      url = urls.changeStatusOrder;
    } else {
      url = urls.changeStatusLead;
    }
    let body = JSON.stringify({
      status: selectVal,
      taskId: record.key,
    });
    let extHeader = {
      "Content-Type": "application/json",
    };
    let result = await DoFetch(url, "PUT", body, extHeader);

    if (result.success == true) {
      alert("Status Changed");
    }
    setload({
      spin: false,
      tip: "",
    });
  };
  const findStatus = async () => {
    if (!record.status) {
      setload({
        spin: true,
        tip: "Finding",
      });
      let url = urls.getStatus;
      let extHeader = {
        recordId: record.recordId,
        type: record.order ? "orders" : "leads",
      };
      let result = await DoFetch(url, "GET", null, extHeader);
      if (result.success) {
        setselectVal(result.payload);
      }
      setload({
        spin: false,
        tip: "",
      });
    }
  };
  useEffect(() => {
    findStatus();
  }, []);
  return (
    <div className="flex gap-4">
      <Select
        options={[
          { value: "Pending", label: "Pending" },
          { value: "Refund", label: "Refund" },
          { value: "Failed", label: "Failed" },
          { value: "Not Interested", label: "Not Interested" },
          { value: "Voice Mail", label: "Voice Mail" },
          { value: "Already Purchased", label: "Already Purchased" },
          { value: "Sale", label: "Sale" },
          { value: "Hot Lead", label: "Hot Lead" },
          { value: "Exchange", label: "Exchange" },
          { value: "No Response", label: "No Response" },
          { value: "Quotation Given", label: "Quotation Given" },
        ]}
        value={selectVal}
        onChange={onchange}
        style={{ width: "120px" }}
      />
      <Button onClick={changeStatus} disabled={changed}>
        Save
      </Button>
    </div>
  );
}
