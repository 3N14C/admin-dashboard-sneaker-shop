import { CategoryType } from "./category-type";
import { OfferType } from "./offer-type";
import { SizeType } from "./size-type";

export type SneakerType = {
  id: string;
  name: string;
  description: string;
  img: string[];
  price: number;
  soldCount: number;
  rating: number;
  createdAt: Date;

  category: CategoryType;
  offer: OfferType;
  sizes: SizeType[];
};
