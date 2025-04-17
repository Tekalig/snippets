import React from "react";
import SnippetsEditForm from "@/components/snippetsEditForm";
import {db} from "@/db";


export default async function snippetEditPage({ params }) {
  const snippetId = Number(params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id: snippetId,
    },
  });

  if (!snippet) {
    return notFound();
  }
  return <SnippetsEditForm snippet={snippet}/>;
}
