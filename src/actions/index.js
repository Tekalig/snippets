'use server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {db} from '../db/index';

export async function updateSnippet(id, title, code) {
    await db.snippet.update({
        where: {
        id,
        },
        data: {
        title,
        code,
        },
    });

    revalidatePath(`/snippets/${id}`);
     redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id) {
    await db.snippet.delete({
        where: {
        id,
        },
    });
    revalidatePath(`/`);
    redirect(`/`);
}

export async function newSnippet(formState, formData) {

    const title = formData.get("title");
    const code = formData.get("code");

    if(typeof title !== 'string' || title.length < 3) {
        return {
            message: "Title should be longer"
        }
    }
    if(typeof code !== 'string' || code.length < 10) {
        return {
            message: "Code should be longer"
        }
    }
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    revalidatePath('/');
    redirect("/");
  }