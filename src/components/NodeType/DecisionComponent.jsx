import React, { useState } from "react";

const DecisionComponent = ({ onConfigChange }) => {
  const [condition, setCondition] = useState("");
  const [trueBranch, setTrueBranch] = useState("");
  const [falseBranch, setFalseBranch] = useState("");

  const handleSave = () => {
    const config = {
      condition,
      branches: {
        true: trueBranch,
        false: falseBranch,
      },
    };
    onConfigChange(config);
  };

  return (
    <div >
      {/* <h2 className="text-xl font-semibold mb-4">Decision Node Configuration</h2> */}

      {/* Condition Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Condition
        </label>
        <input
          type="text"
          placeholder="e.g., priority == 'High'"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* True Branch Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          True Branch (Node ID)
        </label>
        <input
          type="text"
          placeholder="e.g., Node ID 1.1.1"
          value={trueBranch}
          onChange={(e) => setTrueBranch(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* False Branch Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          False Branch (Node ID)
        </label>
        <input
          type="text"
          placeholder="e.g., Node ID 1.1.2"
          value={falseBranch}
          onChange={(e) => setFalseBranch(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* Save Button */}
      {/* <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Configuration
      </button> */}
    </div>
  );
};

export default DecisionComponent;
