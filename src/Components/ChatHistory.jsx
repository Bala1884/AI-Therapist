import React from 'react';

const ChatHistory = () => {
  const chatList = [
    { id: 1, title: 'Chat 1', date: 'Jan 22, 2025' },
    { id: 2, title: 'Chat 2', date: 'Jan 21, 2025' },
    { id: 3, title: 'Chat 3', date: 'Jan 20, 2025' },
    // Add more chats as needed
  ];

  return (
    <div className="w-1/3 bg-gray-800 text-white p-4"> {/* Increased width here */}
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id} className="hover:bg-gray-700 p-2 rounded-md mb-2 cursor-pointer">
            <div className="font-medium">{chat.title}</div>
            <div className="text-sm text-gray-400">{chat.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
