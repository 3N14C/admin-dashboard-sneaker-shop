import { SneakerType } from "./sneaker-type";

export type SizeType = {
  id: string;
  name: string;
  sneakers: SneakerType[];
};
