import { Metadata } from "next";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata: Metadata = {
  title: "MealsPagee",
  description: "MealsPage description",
};

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h1>Delicios meals, created{"..."}</h1>
        <span className={classes.highlight}>by you</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          aspernatur?
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </div>

      <MealsGrid meals={meals} />
    </main>
  );
}
