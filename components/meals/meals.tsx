import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
