import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MealsPagee",
  description: "MealsPage description",
};

export default function MealsPage() {
  return (
    <main>
      <h1>MealsPage</h1>
      <p>
        <Link href="/meals/meal-1">meal-1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">meal-1</Link>
      </p>
      <p>
        <Link href="/meals/meal-3">meal-1</Link>
      </p>
    </main>
  );
}
