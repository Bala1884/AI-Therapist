import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hello!' },
    { id: 2, sender: 'chatgpt', text: 'Hi! How can I help you today?' },

  ]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;  // Don't send empty messages
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: 'user', text: input },
    ]);
    setInput('');
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent z-10">
      <div className="max-h-60 overflow-y-auto p-2 mb-4 bg-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-md ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
