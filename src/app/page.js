import query from "@/utils/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await query("select * from snippets");
  const snippetRender = snippets.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <h4 className="capitalize font-semibold">{snippet.title}</h4>
        <Link
          href={`/snippets/${snippet.id}`}
          className="text-green-400 font-semibold hover:brightness-100 capitalize"
        >
          view
        </Link>
      </div>
    );
  });
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link
          href={"/snippets/new"}
          className="px-1 rounded border font-semibold shadow-md bg-green-500 text-gray-100"
        >
          new
        </Link>
      </div>
      <div className="flex flex-col gap-4">{snippetRender}</div>
    </div>
  );
}
