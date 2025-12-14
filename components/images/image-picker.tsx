"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./image-picker.module.css";
import Image from "next/image";
import type { IStaticImage } from "@/interfaces/image";

interface PropsInterface {
  images: IStaticImage[];
}

export default function ImagePicker({ images }: PropsInterface) {
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
