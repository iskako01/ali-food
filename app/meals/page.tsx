import { Metadata } from "next";
import Link from "next/link";
import classes from "./page.module.css";
import SuspenseLoading from "@/components/common/suspense-loading";
import Meals from "@/components/meals/meals";

export const metadata: Metadata = {
  title: "All Meals",
  description: "Browse all meals added by our users.",
};

export default function MealsPage() {
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

      <SuspenseLoading>
        <Meals />
      </SuspenseLoading>
    </main>
  );
}
