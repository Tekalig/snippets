import React from "react";

export default function snippetNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-xl font-semibold">
          <span className="text-red-400 font-bold text-2xl">Sorry,</span> we can&apos;t
          find the snippet you request
        </h1>
      </div>
    </div>
  );
}
