import React, { useState } from "react";

const EndComponent = ({ onConfigChange }) => {
  const [completionMessage, setCompletionMessage] = useState("Workflow completed successfully.");

  // Update the parent component when input changes
  const handleChange = (e) => {
    const message = e.target.value;
    setCompletionMessage(message);
    onConfigChange({ completion_message: message });
  };

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="completionMessage"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Completion Message
        </label>
        <input
          id="completionMessage"
          type="text"
          placeholder="Enter a completion message"
          value={completionMessage}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* <button
        onClick={() => onConfigChange({ completion_message: completionMessage })}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Configuration
      </button> */}
    </div>
  );
};

export default EndComponent;
