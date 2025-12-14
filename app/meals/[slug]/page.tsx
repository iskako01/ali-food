import { Metadata } from "next";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "MealDetailsPage",
  description: "MealDetailsPage",
};

interface PropsInterface {
  params: {
    slug?: string;
  };
}

export default async function MealDetailsPage(props: PropsInterface) {
  const { slug } = await props.params;
  const meal = getMeal(slug || "");

  if (!meal) {
    notFound();
  }

  return (
    <main>
      {meal && (
        <>
          {" "}
          <div className={classes.mealDetail}>
            <div className={classes.image}>
              {meal.image && (
                <Image src={meal.image.src} alt={meal.image.alt} fill />
              )}
            </div>

            <div className={classes.text}>
              <h1>{meal.title}</h1>
              <p className={classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
              </p>
              <p className={classes.summary}>{meal.summary}</p>
            </div>
          </div>
          <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </>
      )}
    </main>
  );
}
