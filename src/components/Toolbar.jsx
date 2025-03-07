import React from "react";

const Toolbar = ({ onAddNode }) => {
    return (
        <button 
            // className="toolbar-button" 
            onClick={onAddNode}
            class="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        >
            Add Node
            {/* <FiPlus size={24} /> */}
        </button>
    );
};

export default Toolbar;
