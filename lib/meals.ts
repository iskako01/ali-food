import sql from "better-sqlite3";

const db = sql("meals.db");

type MealRow = {
  id: number;
  url: string;
  title: string;
  image: string; // JSON string in DB
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type MealImage = {
  src: string;
  alt: string;
};

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const mealsData = db.prepare("SELECT * FROM meals").all() as MealRow[];

  const parsedMeals = mealsData.map((meal) => ({
    ...meal,
    image: meal.image ? (JSON.parse(meal.image) as MealImage) : null,
  }));

  return parsedMeals;
}
