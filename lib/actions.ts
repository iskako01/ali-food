"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { IMeal } from "@/interfaces/meals";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title") || "",
    summary: formData.get("summary") || "",
    instructions: formData.get("instructions") || "",
    creator: formData.get("name") || "",
    creator_email: formData.get("email") || "",
    image: formData.get("image"),
  } as IMeal;

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid meal data - please check your input.");
  }

  await saveMeal(meal);

  redirect("/meals");
}
