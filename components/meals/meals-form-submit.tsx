"use client";

import ImagePicker from "@/components/images/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
