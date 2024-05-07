export interface ISneaker {
  id: string;
  name: string;
  brandName: string;
  price: string;
  offerPrice: string;
  rating: string;
  soldCount: number;
  image: {
    path: string;
  }[];
  description: string;
  sizeNumber: string;
}
