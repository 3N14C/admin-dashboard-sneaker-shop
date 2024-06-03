import { FC, Suspense } from "react";
import { DashboardTitle } from "../dashboard-title";
import { StatisticCardList } from "./statistic-card-list";

export const TodaySales: FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[5px]">
        <DashboardTitle title="Сегодняшние продажи" />
        <p className="font-medium text-[22px]">Итоги за сегодня</p>
      </div>

      <div className="">
        <StatisticCardList />
      </div>
    </div>
  );
};
