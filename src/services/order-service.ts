import { axiosInstanse } from "@/configs/axios-config";
import { OrderType } from "@/types/order-type";

export const OrderService = {
  getAll: async () => {
    const response = await axiosInstanse.get<OrderType[]>("order/get-all");

    return response.data;
  },
};
