import React from "react";

const NodeActions = ({ onDelete }) => {
    return (
        <button onClick={onDelete} className="delete-button">
            Delete
        </button>
    );
};

export default NodeActions;
