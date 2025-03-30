"use client";

import React from "react";

export const Toggle: React.FC<{
  expanded: boolean;
  onClick: () => void;
}> = ({ expanded, onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {expanded ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5
          h-2.5 text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5 h-2.5 text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 15l6-6 6 6" />
        </svg>
      )}
    </button>
  );
}

export default Toggle;
