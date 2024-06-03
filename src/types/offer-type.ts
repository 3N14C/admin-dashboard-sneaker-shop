import { SneakerType } from "./sneaker-type";

export type OfferType = {
  id: string;
  name: string;
  description: string;
  discount: number;
  sneakers: SneakerType[];
};
