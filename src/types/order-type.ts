import { OrderStatus } from "./enums/order-status-enum";

export type OrderType = {
  id: string;
  userId: string;
  orderSum: number;
  city: string
  street: string
  orderStatus: OrderStatus
  createdAt: Date
};
