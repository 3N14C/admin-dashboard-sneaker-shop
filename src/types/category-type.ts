import { SneakerType } from "./sneaker-type";

export type CategoryType = {
  id: string;
  name: string;
  img: string;
  sneakers: SneakerType[];
};
