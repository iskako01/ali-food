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
  // throw new Error("Loading meals failed");

  const mealsData = db.prepare("SELECT * FROM meals").all() as MealRow[];

  const parsedMeals = mealsData.map((meal) => ({
    ...meal,
    image: meal.image ? (JSON.parse(meal.image) as MealImage) : null,
  }));

  return parsedMeals;
}

export function getMeal(url: string) {
  if (!url) {
    return null;
  }

  const mealData = db
    .prepare("SELECT * FROM meals WHERE url = ?")
    .get(url) as MealRow;

  if (!mealData) {
    throw new Error(`Meal not found for url: ${url}`);
  }

  return {
    ...mealData,
    image: JSON.parse(mealData.image),
  };
}
