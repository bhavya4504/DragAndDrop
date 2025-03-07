import React, { useState } from "react";

const ApprovalComponent = ({ onConfigChange }) => {
  const [approverList, setApproverList] = useState("");
  const [approvalMethod, setApprovalMethod] = useState("single");

  // Handle field changes and send to parent
  const handleChange = () => {
    onConfigChange({
      approver_list: approverList.split(",").map((email) => email.trim()),
      approval_method: approvalMethod,
    });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Approver List (comma-separated emails)
        </label>
        <input
          type="text"
          placeholder="manager@example.com, teamlead@example.com"
          value={approverList}
          onChange={(e) => {
            setApproverList(e.target.value);
            handleChange();
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Approval Method
        </label>
        <select
          value={approvalMethod}
          onChange={(e) => {
            setApprovalMethod(e.target.value);
            handleChange();
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="single">Single Approval</option>
          <option value="majority">Majority Approval</option>
          <option value="all">All Approvals</option>
        </select>
      </div>
    </div>
  );
};

export default ApprovalComponent;
