import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { urls } from "../../../../../links";
import { DoFetch } from "../../../../Utils/DoFetch";
import { getErrors } from "../../../../Utils/ExtractError";

export default function ShowInvoice({ record,fetchTask,admin=false,func=null }) {
  const [viewInvoice, setviewInvoice] = useState(false);
  const [errors, setErrors] = useState({})
  const showInvoice = () => {
    setviewInvoice(true);
  };
  const handleOk = async() => {
    setErrors([])
    const url=urls.addInvoice
    
    const body=JSON.stringify({
        invoiceText:invoice,
        taskId:record.key
    })
    const result=await DoFetch(url,"POST",body,{"Content-Type":"application/json"})
    if(result.success===true){
        if(record.invoiceSaved==true){
            alert("Invoice is Updated")
        }
        else{
            alert("Invoice is added")
        }
        await fetchTask(1,10)
    setviewInvoice(false);

    }
    else{
        let err=getErrors(result,["invoiceText"])
        setErrors(err)
        if(err.msg){
            alert(err.msg)
        }
    }
  };
  const handleCancel = () => {
    setErrors([])
    setviewInvoice(false);
  };
  const [invoice, setinvoice] = useState(
    record.invoiceSaved === true ? record.invoice : ""
  );

  return (
    <div>
      <Button type="primary" onClick={showInvoice}>
      {(admin==false&&record.invoiceSaved===true)?"Update":"Send"}
        
      </Button>
      <Modal
        open={viewInvoice}
        title="Invoice"
        onOk={admin==true?func:handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button key="ok" onClick={handleOk} type="primary">
             {(admin==false&&record.invoiceSaved===true)?"Update":"Send"}
           
          </Button>,
        ]}
      >
        <TextArea
          value={invoice}
          onChange={(e) => setinvoice(e.target.value)}
          className="w-full"
          placeholder="Enter Invoice"
        />
        <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.invoiceText ? errors.invoiceText : ""}
          </span>
      </Modal>
    </div>
  );
}
