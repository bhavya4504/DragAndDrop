import React, { useState, useCallback } from "react";
import ApprovalComponent from "./NodeType/ApprovalComponent";
import TriggerComponent from "./NodeType/TriggerComponent";
import DecisionComponent from "./NodeType/DecisionComponent";
import EndComponent from "./NodeType/EndComponent";
import NotificationComponent from "./NodeType/NotificationComponent";
import TaskNode from "./nodes/TaskNodes";

const AddNodeForm = ({ onAdd, onClose }) => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [parent, setParent] = useState("");
  const [actionType, setActionType] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [nodeConfig, setNodeConfig] = useState({});

  // Approval Node State
  const [approverList, setApproverList] = useState([]);
  const [approvalMethod, setApprovalMethod] = useState("single");

  // Task Node State
  const [taskDetails, setTaskDetails] = useState("");

  // Handle child node config updates
  const handleConfigChange = useCallback((config) => {
    setNodeConfig((prevConfig) => ({ ...prevConfig, ...config }));
  }, []);

  // Handle Task Node change
  const handleTaskChange = (e) => {
    setTaskDetails(e.target.value);
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (label.trim() === "" || type === "") return;

    const newNode = {
      label,
      type,
      description,
      parent,
      ...nodeConfig,
    };

    if (type === "Action Node") {
      newNode.actionType = actionType;
      newNode.recipient = recipient;
      newNode.message = message;
    }

    if (type === "Approval Node") {
      newNode.approverList = approverList;
      newNode.approvalMethod = approvalMethod;
    }

    if (type === "Task Node") {
      newNode.taskDetails = taskDetails;
    }

    onAdd(newNode);

    // Reset form fields
    setLabel("");
    setType("");
    setDescription("");
    setParent("");
    setActionType("");
    setRecipient("");
    setMessage("");
    setNodeConfig({});
    setApproverList([]);
    setApprovalMethod("single");
    setTaskDetails("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Node Type */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:shadow-outline"
          >
            <option value="">Select Node Type</option>
            <option value="Trigger Node">Trigger Node</option>
            <option value="Approval Node">Approval Node</option>
            <option value="Action Node">Action Node</option>
            <option value="Decision Node">Decision Node</option>
            <option value="Notification Node">Notification Node</option>
            <option value="Task Node">Task Node</option>
            <option value="End Node">End Node</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:shadow-outline"
          />
        </div>

        {/* Parent Node */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Parent Node
          </label>
          <input
            type="text"
            placeholder="parent node"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:shadow-outline"
          />
        </div>

        {/* Task Node Fields */}
        {type === "Task Node" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Task Details
            </label>
            <input
              type="text"
              placeholder="Task description"
              value={taskDetails}
              onChange={handleTaskChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
        )}

        {/* Dynamic Node Components */}
        {type === "Approval Node" && (
          <ApprovalComponent
            approverList={approverList}
            setApproverList={setApproverList}
            approvalMethod={approvalMethod}
            setApprovalMethod={setApprovalMethod}
          />
        )}
        {type === "Trigger Node" && (
          <TriggerComponent onConfigChange={handleConfigChange} />
        )}
        {type === "Decision Node" && (
          <DecisionComponent onConfigChange={handleConfigChange} />
        )}
        {type === "End Node" && (
          <EndComponent onConfigChange={handleConfigChange} />
        )}
        {type === "Notification Node" && (
          <NotificationComponent onConfigChange={handleConfigChange} />
        )}

        {/* Action Buttons */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Create
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNodeForm;
