import React, { useState } from "react";

const NotificationComponent = ({ onConfigChange }) => {
  const [recipients, setRecipients] = useState("");
  const [message, setMessage] = useState("A new ticket has been escalated.");

  const handleChange = () => {
    onConfigChange({
      recipients: recipients.split(",").map((email) => email.trim()),
      message,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Recipients (comma-separated emails)
        </label>
        <input
          type="text"
          placeholder="admin@example.com, support@example.com"
          value={recipients}
          onChange={(e) => {
            setRecipients(e.target.value);
            handleChange();
          }}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 "
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          placeholder="Enter your notification message"
          value={message} 
          readOnly
          onChange={(e) => {
            setMessage(e.target.value);
            handleChange();
          }}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 "
          rows={3}
        />
      </div>
    </div>
  );
};

export default NotificationComponent;
