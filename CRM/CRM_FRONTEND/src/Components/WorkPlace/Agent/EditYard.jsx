import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function EditYard({ record, taskId, fetchTask, handleOk }) {
  const [yardname, setYardname] = useState(record.yardname);
  const [edited, setEdited] = useState("");

  // Effect to synchronize state with record
  useEffect(() => {
    setYardname(record.yardname);
  }, [record.yardname]);

  // Edit Yard Name function
  const editYard = async () => {

    let url = urls.editYard;
    let body = JSON.stringify({
      taskId,
      newYard: yardname,
      oldYard: record.yardname,
    });
    let extHeaders = {
      "Content-Type": "application/json",
    };
    let result = await DoFetch(url, "PUT", body, extHeaders);
  
    if (result.success === true) {
      alert("Yard name edited");
      handleOk();
      await fetchTask(1, 10);
    } else {
      alert("Error editing yard name");
    }
  };

  const handleInputChange = (e) => {
    setYardname(e.target.value);
    setEdited(e.target.value !== record.yardname);
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Title"
        value={yardname}
        onChange={handleInputChange}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          width: "200px",
        }}
      />
      <Button
        type="primary"
        ghost
        onClick={editYard}
        disabled={!edited}
      >
        Update
      </Button>
    </div>
  );
}
