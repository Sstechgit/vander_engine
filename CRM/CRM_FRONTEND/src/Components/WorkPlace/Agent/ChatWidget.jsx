import React from 'react';

const ChatWidget = () => {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://mern-chat-app-jdgw.onrender.com/login" // Replace with your chat app URL
        style={{ border: 'none', width: '100%', height: '100%' }}
        title="Chat Application"
      />
    </div>
  );
};

export default ChatWidget;