import { OrderService } from "@/services/order-service";
import { useQuery } from "@tanstack/react-query";

export const useStatisticOrderCount = () => {
  const { data: orders } = useQuery({
    queryKey: ["all-orders-count"],
    queryFn: OrderService.getAll,
  });

  if (!orders)
    return {
      ordersCountToday: null,
      ordersCountYesterday: null,
      percentageIncreaseOrdersCount: null,
    };

  const ordersCountToday = orders.reduce(
    (acc, order) =>
      new Date(order.createdAt).toDateString() === new Date().toDateString()
        ? acc + 1
        : acc,
    0
  );
  const ordersCountYesterday = orders.reduce(
    (acc, order) =>
      new Date(order.createdAt).toDateString() ===
      new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()
        ? acc + 1
        : acc,
    0
  );
  const percentageIncreaseOrdersCount =
    ((ordersCountToday - ordersCountYesterday) / ordersCountYesterday) * 100;
  return {
    ordersCountToday,
    ordersCountYesterday,
    percentageIncreaseOrdersCount,
  };
};
