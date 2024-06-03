import { OrderService } from "@/services/order-service";
import { useQuery } from "@tanstack/react-query";

export const useStatisticOrdersSum = () => {
  const { data: orders } = useQuery({
    queryKey: ["all-orders"],
    queryFn: OrderService.getAll,
  });

  if (!orders)
    return {
      ordersSumToday: null,
      ordersSumYesterday: null,
      percentageIncreaseOrdersSum: null,
    };

  const ordersSumToday = orders.reduce(
    (acc, order) =>
      new Date(order.createdAt).toDateString() === new Date().toDateString()
        ? acc + order.orderSum
        : acc,
    0
  );

  const ordersSumYesterday = orders.reduce(
    (acc, order) =>
      new Date(order.createdAt).toDateString() ===
      new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()
        ? acc + order.orderSum
        : acc,
    0
  );

  const percentageIncreaseOrdersSum =
    ordersSumYesterday !== 0
      ? ((ordersSumToday - ordersSumYesterday) / ordersSumYesterday) * 100
      : 0;

  return {
    ordersSumToday,
    ordersSumYesterday,
    percentageIncreaseOrdersSum,
  };
};
