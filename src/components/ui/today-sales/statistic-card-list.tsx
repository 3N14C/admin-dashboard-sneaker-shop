import { axiosInstanse } from "@/configs/axios-config";
import { IOrder } from "@/types/order.interface";
import { FC, Suspense } from "react";
import { StatisticCard } from "./statistic-card";

const getOrders = async () => {
  const response = axiosInstanse.get<IOrder[]>("/order");

  return (await response).data;
};

export const StatisticCardList: FC = async () => {
  const orders = await getOrders();
  const totalSalesOrders = orders.reduce(
    (acc, order) => acc + +order.sneaker.price,
    0
  );

  return (
    <div className="grid grid-cols-4 items-center">
      <StatisticCard
        icon="total-sales"
        statisticNumber={totalSalesOrders.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        title="total sales"
        subtitle="+10% from yesterday"
        subtitleColor="text-[#feb95a]"
      />

      <StatisticCard
        icon="total-order"
        statisticNumber={orders.length.toString()}
        title="total order"
        subtitle="+8% from yesterday"
        subtitleColor="text-[#A9DFD8]"
      />

      <StatisticCard
        icon="product-sold"
        statisticNumber={"9"}
        title="product sold"
        subtitle="+2% from yesterday"
        subtitleColor="text-[#F2C8ED]"
      />

      <StatisticCard
        icon="new-users"
        statisticNumber={"12"}
        title="new users"
        subtitle="+3% from yesterday"
        subtitleColor="text-[#20AEF3]"
      />
    </div>
  );
};
