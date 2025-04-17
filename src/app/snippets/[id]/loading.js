import React from "react";

export default function snippetLoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-semibold">Loading</div>
      <div className="animate-pulse text-3xl font-bold">....</div>
    </div>
  );
}
