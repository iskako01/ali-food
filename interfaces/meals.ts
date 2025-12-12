import { IImage } from "./image";

export interface IMeal {
  id: string;
  title: string;
  image: IImage;
  summary: string;
  creator: string;
  url: string;
}
