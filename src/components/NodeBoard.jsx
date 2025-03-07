import React from "react";
import { useNodeContext } from "../components/context/NodeContext";
import TaskNode from "./nodes/TaskNodes";

const NodeBoard = () => {
  const { nodes, addNode, deleteNode } = useNodeContext();

  return (
    <div style={styles.board}>
      <h2>Workflow Board</h2>

      <button onClick={() => addNode("task", { label: "My Task", color: "#2196F3" })}>
        Add Task Node
      </button>

      {nodes.length === 0 ? (
        <p style={styles.noNodes}>No nodes available. Add some tasks!</p>
      ) : (
        nodes.map((node) => (
          <TaskNode key={node.id} id={node.id} data={node.data} onDelete={deleteNode} />
        ))
      )}
    </div>
  );
};

const styles = {
  board: {
    padding: "20px",
    background: "#f4f4f9",
    minHeight: "100vh",
  },
  noNodes: {
    color: "#888",
    fontStyle: "italic",
  },
};

export default NodeBoard;
