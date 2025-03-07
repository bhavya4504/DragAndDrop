import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);

  // Add a new node
  const addNode = (type, config) => {
    const newNode = {
      id: uuidv4(),
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
      description: `This is a ${type} node`,
      config,
      is_parent: false,
      child_count: 0,
      is_leaf: true,
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  // Update an existing node
  const updateNode = (id, updatedConfig) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, config: updatedConfig } : node
      )
    );
  };

  // Delete a node
  const deleteNode = (id) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  // Duplicate a node
  const duplicateNode = (id) => {
    const nodeToDuplicate = nodes.find((node) => node.id === id);
    if (nodeToDuplicate) {
      addNode(nodeToDuplicate.type, nodeToDuplicate.config);
    }
  };

  return (
    <NodeContext.Provider value={{ nodes, addNode, updateNode, deleteNode, duplicateNode }}>
      {children}
    </NodeContext.Provider>
  );
};

export const useNodeContext = () => useContext(NodeContext);
