import {db} from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import *as actions from "@/actions";

export default async function showSnippetsPage({ params }) {
  const snippetId = Number(params.id);
  const deleteSnippet = actions.deleteSnippet.bind(null, snippetId);
  const snippet = await db.snippet.findUnique({
    where: {
      id: snippetId,
    },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold"> {snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border rounded shadow-md bg-amber-400 p-2"
          >
            Edit
          </Link>
          <form action={deleteSnippet}>
          <button className="border rounded shadow-md bg-red-500 p-2">
            Delete
          </button>
          </form>
        </div>
      </div>
      <pre className="p-2 border bg-gray-200 border-gray-200 rounded shadow">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}