'use server'

import { createNews, deleteNews } from './news-service';
import { revalidatePath } from 'next/cache';

export async function addNewsAction(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!title || !content) return;

    await createNews(title, content);
    revalidatePath('/');
    revalidatePath('/admin');
}

export async function deleteNewsAction(formData: FormData) {
    const id = formData.get('id') as string;
    if (!id) return;

    await deleteNews(id);
    revalidatePath('/');
    revalidatePath('/admin');
}
