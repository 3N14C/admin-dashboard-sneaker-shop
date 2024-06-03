"use client";

import { UserService } from "@/services/user-service";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { StatisticCard } from "./statistic-card";
import { useStatisticUsers } from "@/hooks/use-statistic-users";
import { useStatisticOrdersSum } from "@/hooks/use-statistic-orders-sum";
import { useStatisticOrderCount } from "@/hooks/use-statistic-order-count";

export const StatisticCardList: FC = () => {
  const { percentageIncreaseUsers, todayUsers } = useStatisticUsers();
  const { ordersSumToday, percentageIncreaseOrdersSum } =
    useStatisticOrdersSum();
  const { ordersCountToday, percentageIncreaseOrdersCount } =
    useStatisticOrderCount();

  return (
    <div className="grid grid-cols-4 items-center">
      <StatisticCard
        icon="total-sales"
        statisticNumber={
          ordersSumToday?.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          }) ?? "0"
        }
        title="Продаж за сегодня"
        subtitle={`${percentageIncreaseOrdersSum && percentageIncreaseOrdersSum > 0 ? "+" : ""}${percentageIncreaseOrdersSum?.toFixed(0)}% чем вчера`}
        subtitleColor="text-[#feb95a]"
      />

      <StatisticCard
        icon="total-order"
        statisticNumber={`${ordersCountToday}`}
        title="Заказов за сегодня"
        subtitle={`${percentageIncreaseOrdersCount && percentageIncreaseOrdersCount > 0 ? "+" : ""}${percentageIncreaseOrdersCount?.toFixed(0)}% чем вчера`}
        subtitleColor="text-[#A9DFD8]"
      />

      {/* <StatisticCard
        icon="product-sold"
        statisticNumber={"9"}
        title="product sold"
        subtitle="+2% from yesterday"
        subtitleColor="text-[#F2C8ED]"
      />  */}

      <StatisticCard
        icon="new-users"
        statisticNumber={`${todayUsers ?? 0}`}
        title="Новые пользователи"
        subtitle={`${percentageIncreaseUsers && percentageIncreaseUsers > 0 ? "+" : ""}${percentageIncreaseUsers && Math.abs(percentageIncreaseUsers).toFixed(0)}% чем вчера`}
        subtitleColor="text-[#20AEF3]"
      />
    </div>
  );
};
