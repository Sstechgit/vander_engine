import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import Searcher from "../Searcher";
export default function SendChat({
  subject = null,
  send,
  leadInfo,
  setload,
  record,

}) {
  const [subjectState, setsubjectState] = useState(subject);
  const [disabled, setdisabled] = useState(false);
  const [body, setBody] = useState("");
  const [errors, seterrors] = useState({});
  const [open, setopen] = useState(false);
  
  const addQuote = (quoteVal, setBody) => {

    setBody((prev) => {
      // console.log(prev);
      return (
        prev +
        "\n" +
        "Make : " +
        quoteVal.make +
        "\n" +
        "Year : " +
        quoteVal.year +
        "\n" +
        "Model : " +
        quoteVal.model +
        "\n" +
        "Part : " +
        quoteVal.part +
        "\n" +
        "Variant : " +
        quoteVal.variant +
        "\n" +
        "Pricing : " +
        quoteVal.pricing +
        "\n" +
        "Stock No. : " +
        quoteVal.Stock +
        "\n" +
        "Miles : " +
        quoteVal.miles +
        "\n" +
        "Description : " +
        quoteVal.description +
        "\n"
      );
     
    });
  
  };

  const handleOk = async () => {
    // console.log(subjectState,subject,body)
    await send(subjectState, body);
    handleCancel();
  };
  const handleCancel = () => {
    setopen(false);
  };
  const ClickSend = async () => {
    await send();
  };

  useEffect(() => {
    setsubjectState(subject);
  }, [subject]);

  return (
    <div className="w-full h-[10%] flex items-center justify-end p-4 bg-slate-900">
      <Button
        type="primary"
        onClick={() => setopen(true)}
        disabled={sessionStorage.getItem("conversationDisabled") == "true"}
      >
        Send Mail
      </Button>
      <Modal
        open={open}
        onClose={handleCancel}
        footer={[
          <Button key="Send" onClick={handleOk}>
            Send
          </Button>,
          <Searcher
            record={record}
            setload={setload}
            concat={true}
            func={addQuote}
            setBody={setBody}
          />,
        ]}
        onOk={handleOk}
        onCancel={handleCancel}
        className="text-center text-5xl"
      >
        <div className="mb-4">
          <Input
            disabled={subject != null}
            value={subject != null ? subject : subjectState}
            onChange={(e) => {
              setsubjectState(e.target.value);
            }}
            placeholder="Enter Subject"
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.title ? errors.title : ""}
          </span>
        </div>
        <div className="mb-4">
          <TextArea
            placeholder="Enter Your Body"
            value={body}
            rows={6}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
            {errors?.description ? errors.description : ""}
          </span>
        </div>
      </Modal>
    </div>
  );
}
