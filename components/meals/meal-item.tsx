import Image from "next/image";
import classes from "./meal-item.module.css";
import { IMeal } from "@/interfaces/meals";
import Link from "next/link";

interface PropsInterface {
  meal: IMeal;
}

export default function MealItem({ meal }: PropsInterface) {
  return (
    <article className={classes["meal-item"]}>
      <div>
        {meal.image && (
          <Image
            src={meal.image.src}
            alt={meal.image.alt ?? meal.title}
            width={425}
            height={350}
          />
        )}
        <div className={classes.title}>
          <h2>{meal.title}</h2>
          <p>by {meal.creator}</p>
        </div>
      </div>

      <div className={classes.content}>
        <p className={classes.summary}>{meal.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meal.url}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
