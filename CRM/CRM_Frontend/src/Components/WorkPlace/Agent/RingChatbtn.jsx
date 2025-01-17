import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Alert, Button, Input, Modal } from "antd";
import Searcher from "./Searcher";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
export default function RingChatbtn({ record, setload, auth, fetch, to }) {
  const [body, setBody] = useState("");
  const [file, setfile] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const openModal = () => {
    setshowModal(true);
  };
  const closeModal = () => {
    setshowModal(false);
  };
  const handleCancle = () => {
    setshowModal(false);
  };
  const MAX_FILE_SIZE = 1.4 * 1024 * 1024; // 1.4 MB
  const acceptedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/bmp",
    "image/gif",
    "image/tiff",
    "image/svg+xml",
    "video/3gpp",
    "video/mp4",
    "video/mpeg",
    "video/msvideo",
    "audio/mpeg",
    "text/vcard",
    "application/zip",
    "application/gzip",
    "application/rtf",
  ];
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check MIME type
      if (!acceptedMimeTypes.includes(selectedFile.type)) {
        Alert("Invalid file type");
        e.target.value = "";
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE) {
        alert("File is too large. Maximum size is 1.4 MB.");
        e.target.value = "";

        return;
      }
    }
    setfile(e.target.files[0]);
  };
  const addQuote = (quoteVal, setBody) => {
    console.log(quoteVal, body);
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
  const handleSend = async () => {
    setload({
      spin: true,
      tip: "Loading",
    });
    const formData = new FormData();
    formData.append("to", to);
    formData.append("text",body)

    if (file) {
      formData.append("file", file);
    }

    try {
   
      let headers = {
        Authorization: `Bearer ${sessionStorage.getItem("accessT")}`,
      };
      const result = await DoFetch(urls.sendmsg, "POST",formData)
    
  
     
      if (result?.error && result.error == "ReLogin") {
        alert("Ring Central Session is expired. Relogin again to continue");
        
        auth();
        return;
      }
      if (result.success == true) {
        alert("Message Sent");

        await fetch();
        closeModal();
      } else {
  
        alert(result?.message || "Server Issue Occured");
      }
    } catch (error) {
 
      alert("Server Issue Occured");
    }
    setload({
      spin: false,
      tip: "",
    });
  };
  
  return (
    <div className="w-full h-[10%] flex items-center justify-end p-4 bg-slate-900">
      <Button type="primary" onClick={openModal}>
        Send Message
      </Button>

      <Modal
        open={showModal}
        title="Send Message"
        onCancel={handleCancle}
        footer={[
          <Button type="primary" onClick={handleSend}>
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
      >
        {" "}
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
        <input
          accept={acceptedMimeTypes.join(",")}
          type="file"
          className="border-0 mt-3"
          onChange={handleFileChange}
        />
      </Modal>
    </div>
  );
}
