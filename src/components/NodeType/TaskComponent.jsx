import React, { useState, useEffect } from "react";

const TaskComponent = ({ onConfigChange }) => {
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Trigger parent config update on change
  useEffect(() => {
    onConfigChange({
      assigned_to: assignedTo,
      due_date: dueDate,
    });
  }, [assignedTo, dueDate, onConfigChange]);

  return (
    <div>
      {/* Assigned To Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Assigned To (Team/User)
        </label>
        <input
          type="text"
          placeholder="helpdesk_team"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 "
        />
      </div>

      {/* Due Date Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 "
        />
      </div>
    </div>
  );
};

export default TaskComponent;
