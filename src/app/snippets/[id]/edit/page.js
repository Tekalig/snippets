import React from "react";
import SnippetsEditForm from "@/components/snippetsEditForm";
import query from "@/utils/db";

export default async function snippetEditPage({ params }) {
  const snippetId = Number(params.id);
  const snippet = await query("select * from snippets where id = $1", [
    snippetId,
  ]);
  if (snippet.length == 0) {
    return notFound();
  }
  return <SnippetsEditForm snippet={snippet[0]} />;
}
