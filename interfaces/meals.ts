import { IImage } from "./image";

export interface IMeal {
  id: number;
  url: string;
  image: IImage | string | null;
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
