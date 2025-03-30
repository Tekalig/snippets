import Link from "next/link";
import {db} from "@/db";

export default async function Home() {
  "use server";
  const snippets = await db.snippet.findMany();
  const snippetRender = snippets?.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="flex justify-between items-center p-2 my-2 border-b rounded border-green-700"
      >
        <h4 className="capitalize font-bold">{snippet.title}</h4>
        <Link
          href={`/snippets/${snippet.id}`}
          className="text-green-400 font-bold hover:brightness-200 capitalize hover:scale-105"
        >
          view
        </Link>
      </div>
    );
  });
  return (
    <div className="py-2 px-4 w-1/2 rounded-md shadow-md mx-auto my-4 bg-slate-200 capitalize">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Snippets</h1>
        <Link
          href={"/snippets/new"}
          className="py-2 px-4 text-lg border font-bold rounded-md shadow-md bg-green-400 hover:bg-green-600 text-gray-700 hover:scale-25"
        >
          new
        </Link>
      </div>
      <div className="flex flex-col gap-4">{snippetRender}</div>
    </div>
  );
}
