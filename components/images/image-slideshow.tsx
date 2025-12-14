"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./image-slideshow.module.css";
import Image from "next/image";
import type { IStaticImage } from "@/interfaces/image";

interface PropsInterface {
  images: IStaticImage[];
}

export default function ImageSlideshow({ images }: PropsInterface) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          src={image.src}
          alt={image.alt}
          key={index}
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}
