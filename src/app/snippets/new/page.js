'use client'
import {useFormState} from 'react-dom';
import * as actions from "../../../actions/index";

export default function NewSnippetPage() {
  const [formState, action] = useFormState(actions.newSnippet, {message:""})

  return (
    <form action={action} className='w-1/2 mx-auto'>
      <h1 className="font-bold m-3 text-3xl">Create Snippets</h1>
      <div className="flex justify-center flex-col gap-5 cap border rounded-md p-4 shadow-md bg-neutral-300">
        <div className="flex gap-4 flex-wrap">
          <label htmlFor="title" className="w-12 text-xl font-semibold">
            Title:
          </label>
          <input
            name="title"
            className="border rounded p-4 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <label htmlFor="code" className="w-12 text-xl font-semibold">
            Code:
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full h-36"
            id="code"
          />
        </div>
        {formState.message ? <div className='text-lg text-red-500 animate-pulse'>
          {formState.message}
        </div>:null}
        
        <button type="submit" className="rounded p-2 bg-green-400 text-2xl w-24 mx-auto capitalize font-extrabold shadow-md hover:bg-green-600">
          save
        </button>
      </div>
    </form>
  );
}
