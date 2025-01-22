import { Button, Radio, Space, Tabs, Input, List } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";

export default function AllNotes() {
  // State Variables
  const [agents, setagents] = useState([]);
  const [tabPosition, setTabPosition] = useState("left");
  const [selectedAgent, setSelectedAgent] = useState(null); // Holds the selected agent's info
  const [messages, setMessages] = useState([]); // Holds the messages for chat
  const [messageInput, setMessageInput] = useState(""); // Input field state for typing messages

  // Pagination state variables
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Function to change tab position
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  // Function to fetch agents with pagination
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
      setagents(agent);
    }
  };

  // Fetch agents when component mounts or page changes
  useEffect(() => {
    fetchTrackedAgents();
  }, [currentPage, pageSize]);

  // Handle agent selection for chat
  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent); // Set the selected agent
    setMessages(loadMessages(agent.key)); // Load messages from localStorage for the selected agent
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (selectedAgent) {
      // Ensure sender is always a string (check if it's not an object)
      const sender = String(sessionStorage.getItem("name") || "Admin");

      // Create new message
      const newMessage = { from: sender, text: messageInput };

      // Update state with the new message
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);

      // Save updated messages to localStorage
      saveMessages(selectedAgent.key, newMessages);

      // Clear the input field after sending the message
      setMessageInput("");
    }
  };

  // Function to save messages to localStorage
  const saveMessages = (agentKey, messages) => {
    localStorage.setItem(`messages-${agentKey}`, JSON.stringify(messages));
  };

  // Function to load messages from localStorage
  const loadMessages = (agentKey) => {
    const storedMessages = localStorage.getItem(`messages-${agentKey}`);
    return storedMessages ? JSON.parse(storedMessages) : [];
  };

  return (
    <>
      <div className="board w-[25%] text-center h-full">
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
            className="w-[100%] px-3 h-full"
            tabPosition={tabPosition}
            onTabClick={(key) => {
              const agent = agents.find((a) => a.key === key); // Find the selected agent based on tab key
              handleAgentSelect(agent); // Open chat for selected agent
            }}
            items={agents.map((agent, idx) => ({
              label: (
                <span className="text-base">
                  <span style={{ marginRight: "8px" }}>{idx + 1}.</span>
                  {agent.name}
                </span>
              ),
              key: agent.key,
              children: <div></div>,
            }))}
            tabBarStyle={{ maxHeight: "auto", overflowY: "auto" }}
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

            {/* Display messages */}
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
