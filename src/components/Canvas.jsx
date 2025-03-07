import React, { useState, useCallback, useMemo } from "react";
import '@xyflow/react/dist/style.css';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import AddNodeForm from "./AddNodeForm";
import Toolbar from "./Toolbar";
import TaskNode from "./nodes/TaskNodes";

// Main Canvas Component
const Canvas = () => {
    // Manage nodes and edges
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [showForm, setShowForm] = useState(false);

    // Handle new edge connections (with animation)
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        [setEdges]
    );

    // Add a new node (TaskNode or others)
    const addNewNode = (type, label, config) => {
        const id = `${Date.now()}`;
        const position = { x: 100 + nodes.length * 50, y: 100 + nodes.length * 50 };

        const newNode = {
            id,
            position,
            type, // Use exact type (e.g., "taskNode")
            data: {
                label: label || "New Task", // Default label
                color: config?.color || "#4CAF50", // Default color
                description: config?.description || "Task description", // Default description
                is_parent: config?.is_parent || false,
                child_count: config?.child_count || 0,
                is_leaf: config?.is_leaf !== undefined ? config.is_leaf : true,
            },
        };

        setNodes((prev) => [...prev, newNode]);
        setShowForm(false);
    };

    // Delete node and remove connected edges
    const deleteNode = (id) => {
        setNodes((prev) => prev.filter((node) => node.id !== id));
        setEdges((prev) => prev.filter((edge) => edge.source !== id && edge.target !== id));
    };

    // Memoize node types for React Flow (avoids re-creation on every render)
    const nodeTypes = useMemo(() => ({
        taskNode: (props) => <TaskNode {...props} onDelete={deleteNode} />,
    }), [deleteNode]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {/* Toolbar for adding new nodes */}
            <Toolbar onAddNode={() => setShowForm(true)} />

            {/* Show Add Node Form */}
            {showForm && <AddNodeForm onAdd={addNewNode} onClose={() => setShowForm(false)} />}

            {/* ReactFlow Canvas */}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes} // Pass memoized nodeTypes
                fitView
            >
                <Background variant="dots" gap={12} size={1} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default Canvas;
