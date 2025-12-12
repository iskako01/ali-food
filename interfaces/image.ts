import { StaticImageData } from "next/image";

export interface IStaticImage {
  src: StaticImageData;
  alt: string;
}

export interface IImage {
  src: string;
  alt?: string;
}
