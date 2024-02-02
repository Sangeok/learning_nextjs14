'use server';

import { revalidatePath } from "next/cache";

export async function testFormAction(formData : FormData) {
    console.log("form submitted!")
    console.log(formData.get("name"))
    revalidatePath("/about-us");
}