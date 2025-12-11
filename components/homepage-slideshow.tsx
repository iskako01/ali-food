import Link from "next/link";
import classes from "./homepage-slideshow.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

export default function HomepageSlideshow() {
  const images = [
    { src: burgerImg, alt: "A delicious, juicy burger" },
    { src: curryImg, alt: "A delicious, spicy curry" },
    { src: dumplingsImg, alt: "Steamed dumplings" },
    { src: macncheeseImg, alt: "Mac and cheese" },
    { src: pizzaImg, alt: "A delicious pizza" },
    { src: schnitzelImg, alt: "A delicious schnitzel" },
    { src: tomatoSaladImg, alt: "A delicious tomato salad" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.slideshow}>
        <ImageSlideshow images={images} />
      </div>
      <div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </div>
  );
}
