import React, { useState } from "react";

const ActionComponent = ({ onConfigChange }) => {
  const [actionType, setActionType] = useState("email");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  // Handle updating the parent form when values change
  const handleChange = () => {
    onConfigChange({
      action_type: actionType,
      parameters: { recipient, message },
    });
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Action Node Configuration</h3>

      {/* Action Type */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Action Type
        </label>
        <select
          value={actionType}
          onChange={(e) => {
            setActionType(e.target.value);
            handleChange();
          }}
          className="shadow border rounded w-full py-2 px-3"
        >
          <option value="email">Email</option>
          <option value="update_record">Update Record</option>
          <option value="api_call">API Call</option>
        </select>
      </div>

      {/* Recipient */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Recipient Email
        </label>
        <input
          type="email"
          value={recipient}
          onChange={(e) => {
            setRecipient(e.target.value);
            handleChange();
          }}
          placeholder="user@example.com"
          className="shadow border rounded w-full py-2 px-3"
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            handleChange();
          }}
          placeholder="Your request has been received."
          className="shadow border rounded w-full py-2 px-3"
        />
      </div>
    </div>
  );
};

export default ActionComponent;
