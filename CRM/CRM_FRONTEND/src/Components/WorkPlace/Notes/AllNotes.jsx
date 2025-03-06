import { Button, Radio, Space, Tabs, Input, List } from "antd";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function AllNotes() {
  const [agents, setAgents] = useState([]);
  const [tabPosition, setTabPosition] = useState("left");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const socket = io("http://backend.sstechcrm.com", {
    transports: ["websocket"],
  });

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const fetchTrackedAgents = async () => {
    const url = `${urls.trackAgent}/${currentPage}/${pageSize}`;
    const result = await DoFetch(url, "GET");
    if (result.success === true) {
      let agent = [];
      result.data.records.forEach((e, idx) => {
        agent.push({
          id: idx + (currentPage - 1) * pageSize + 1 + ".",
          key: e._id,
          name: e.name,
        });
      });
      setAgents(agent);
    }
  };

  useEffect(() => {
    fetchTrackedAgents();
  }, [currentPage, pageSize]);

  const loadMessages = async (agentKey) => {
    const response = await fetch(`http://backend.sstechcrm.com/api/messages/${agentKey}`);
    if (response.ok) {
      return await response.json();
    }
    console.error("Failed to fetch messages");
    return [];
  };

  const saveMessages = async (agentKey, message) => {
    await fetch("http://backend.sstechcrm.com/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agentKey, ...message }),
    });
  };

  const handleAgentSelect = async (agent) => {
    setSelectedAgent(agent);
    const messages = await loadMessages(agent.key);
    setMessages(messages);
  };

  const handleSendMessage = async () => {
    if (selectedAgent) {
      const sender = String(sessionStorage.getItem("name") || "Admin");
      const newMessage = {
        from: sender,
        text: messageInput,
        isSentByClient: true,
        to: selectedAgent.name,
      };
      socket.emit("sendMessage", {
        agentKey: selectedAgent.key,
        ...newMessage,
      });
      await saveMessages(selectedAgent.key, newMessage);
      setMessageInput("");
    }
  };

  useEffect(() => {
    const handleNewMessage = (message) => {
      console.log("New message received:", message);
      if (
        selectedAgent &&
        message.agentKey === selectedAgent.key &&
        !message.isSentByClient
      ) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    };

    socket.on("newMessage", handleNewMessage);
    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [selectedAgent]);
  return (
    <>
      <div className="board w-[25%] text-center">
        <div className="board-header" style={{ backgroundColor: "#cddff7" }}>
          <h1 className="text-2xl font-bold text-white bg-black py-2">
            Agents
          </h1>
          <Space>
            <Radio.Group
              value={tabPosition}
              onChange={changeTabPosition}
            ></Radio.Group>
          </Space>
          <Tabs
            className="w-[100%] px-3"
            tabPosition={tabPosition}
            onTabClick={(key) => {
              const agent = agents.find((a) => a.key === key);
              handleAgentSelect(agent);
            }}
            items={agents.map((agent, idx) => ({
              label: (
                <span className="text-base">
                  <span style={{ marginRight: "8px" }}>{idx + 1}</span>
                  {agent.name}
                </span>
              ),
              key: agent.key,
              children: <div></div>,
            }))}
            tabBarStyle={{ maxHeight: "500px", overflow: "auto" }}
          />
        </div>
      </div>

      {/* Chat Section */}
      {selectedAgent && (
        <div
          className="chat-board"
          style={{
            position: "absolute",
            top: "12%",
            left: "38%",
            width: "60%",
            height: "85vh",
            padding: "2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "20px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>Hello, {selectedAgent.name}</h3>
            {/*Display Messages*/}
            <List
              dataSource={messages}
              renderItem={(message, idx) => (
                <List.Item key={idx}>
                  <strong>{String(message.from)}:</strong> {message.text}
                </List.Item>
              )}
            />
          </div>
          {/* Input field for typing messages */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Input  type="file"/>
            <Input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                marginRight: "10px",
              }}
            />
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
