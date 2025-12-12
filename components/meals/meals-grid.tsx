import MealItem from "@/components/meals/meal-item";
import classes from "./meals-grid.module.css";
import { IMeal } from "@/interfaces/meals";

interface PropsInterface {
  meals: IMeal[];
}

export default function MealsGrid({ meals }: PropsInterface) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
