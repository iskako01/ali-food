"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title") || "",
    summary: formData.get("summary") || "",
    instructions: formData.get("instructions") || "",
    creator: formData.get("name") || "",
    creator_email: formData.get("email") || "",
    image: {
      src: formData.get("image"),
      alt: formData.get("title") || "",
    },
  };

  await saveMeal(meal);

  redirect("/meals");
}
