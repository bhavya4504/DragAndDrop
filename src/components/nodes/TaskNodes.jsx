import React from "react";
import { Handle, Position } from "reactflow";
import { FaTasks } from "react-icons/fa";

const TaskNode = ({ id, data, onDelete }) => {
  const { label, color = "#4CAF50" } = data; // Default green if no color
  console.log("Task Node Rendered: ", { id, data });

  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: `2px solid ${color}`,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <FaTasks style={{ color, marginRight: "8px" }} />
      <span>{label}</span>

      {/* Delete Button */}
      <button
        style={{
          marginLeft: "10px",
          background: "red",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => onDelete(id)}
      >
        ✕
      </button>

      {/* Input and Output Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default TaskNode;
