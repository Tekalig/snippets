import React from "react";
import query from "@/utils/db";
import { redirect } from "next/navigation";

export default function NewSnippetPage() {
  async function handleSubmit(event) {
    "use server";
    const title = event.get("title");
    const code = event.get("code");
    const response = await query(
      "INSERT INTO snippets (title, code) VALUES ($1, $2) RETURNING *",
      [title, code]
    );
    redirect("/");
  }
  return (
    <form action={handleSubmit}>
      <h1 className="font-bold m-3 text-3xl">Create Snippets</h1>
      <div className="flex justify-center flex-col gap-5 cap border rounded-md p-4 shadow-md bg-neutral-300">
        <div className="flex gap-4 flex-wrap">
          <label htmlFor="title" className="w-12 text-xl">
            Title:
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <label htmlFor="code" className="w-12 text-xl">
            Code:
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-green-400 text-2xl">
          save
        </button>
      </div>
    </form>
  );
}
