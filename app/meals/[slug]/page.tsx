import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MealDetailsPage",
  description: "MealDetailsPage",
};

export default async function MealDetailsPage(props) {
  const { slug } = await props.params;

  return (
    <main>
      <h1>MealDetailsPage</h1>
      <p>{slug}</p>
    </main>
  );
}
