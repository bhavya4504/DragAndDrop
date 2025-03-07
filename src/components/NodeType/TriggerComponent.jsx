import React, { useState } from "react";

const TriggerComponent = ({ onConfigChange }) => {
  const [eventType, setEventType] = useState("");
  const [source, setSource] = useState("");

  const handleSave = () => {
    onConfigChange({
      event_type: eventType,
      source,
    });
  };

  return (
    <div >
      {/* <h2 className="text-xl font-semibold mb-6">Trigger Node Configuration</h2> */}

      <div className="mb-4">
        <label
          htmlFor="eventType"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Event Type
        </label>
        <input
          id="eventType"
          type="text"
          placeholder="e.g., ticket_created"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="source"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Source
        </label>
        <input
          id="source"
          type="text"
          placeholder="e.g., IT Helpdesk"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 "
        />
      </div>

    </div>
  );
};

export default TriggerComponent;
