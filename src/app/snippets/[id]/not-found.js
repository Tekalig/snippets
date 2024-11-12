import React from "react";

export default function snippetNotFound() {
  return (
    <div>
      <h1 className="text-xl font-semibold">
        <span className="text-red-400 font-bold text-2xl">Sorry,</span> we cant
        find the snippet you request
      </h1>
    </div>
  );
}
