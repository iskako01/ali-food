import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { notFound } from "next/navigation";
import { IMeal } from "@/interfaces/meals";

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
    notFound();
  }

  return {
    ...mealData,
    image: JSON.parse(mealData.image),
  };
}

export async function saveMeal(meal: IMeal) {
  meal.url = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extention = meal.image.name.split(".").pop();
  const imageFileName = `${meal.url}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${imageFileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = JSON.stringify({
    src: `/images/${imageFileName}`,
    alt: meal.title,
  });

  db.prepare(
    `
    INSERT INTO meals (
      url,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    ) VALUES (
      @url,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `
  ).run(meal);
}
