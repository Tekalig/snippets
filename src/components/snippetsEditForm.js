"use client";
import {React, useState} from "react";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

export default function SnippetsEditForm({ snippet: { id, title, code } }) {
  const [minifiedCode, setMinifiedCode] = useState(code);
  const [updatedTitle, setUpdatedTitle] = useState(title);
                          
  const editSnippetsForm = actions.updateSnippet.bind(null, id, updatedTitle, minifiedCode);

  const handleChange = (value) => {
    setMinifiedCode(value);
  }
  return (
  <>
    <div>
      <label htmlFor="title" className="text-md font-bold p-2">Title: </label>
      <input 
        id="title"
        name="title"
        value={updatedTitle}
        onChange={(e)=>setUpdatedTitle(e.target.value)}
        className="p-2 text-md text-gray-800"
        />
    </div>
    <Editor
      name="code"
      height="40vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={minifiedCode}
      options={{ minimap: { enabled: false } }}
      onChange={handleChange}
    />
    <form className="m-4 flex flex-col gap-4" action={editSnippetsForm}>
    <button type="submit" className="p-2 bg-green-500 text-gray-800 w-24">Submit</button>
  </form>
  </>)
  ;
}
