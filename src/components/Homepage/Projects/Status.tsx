import React from "react";

function Status({ status = "Active" || "In Progress" || "Offline" || "Demo" }) {
  return (
    <div className="flex items-center absolute z-50 top-2 right-2 text-white uppercase text-sm">
      <span
        className={`rounded-full inline-block w-2 h-2 shadow-lg mr-2 ${
          status === "Active"
            ? "bg-green-400"
            : status === "In Progress"
            ? "bg-yellow-400"
            : status === "Demo"
            ? "bg-blue-400"
            : "bg-red-400"
        }`}
      ></span>
      {status}
    </div>
  );
}

export default Status;
