import query from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function showSnippetsPage({ params }) {
  const snippetId = Number(params.id);
  const snippet = await query("select * from snippets where id = $1", [
    snippetId,
  ]);
  if (snippet.length == 0) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold"> {snippet[0].title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet[0].id}/edit`}
            className="border rounded shadow-md bg-amber-400 p-2"
          >
            Edit
          </Link>
          <button className="border rounded shadow-md bg-red-500 p-2">
            Delete
          </button>
        </div>
      </div>
      <pre className="p-2 border bg-gray-200 border-gray-200 rounded shadow">
        <code>{snippet[0].code}</code>
      </pre>
    </div>
  );
}
