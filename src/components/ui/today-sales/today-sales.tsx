import { FC, Suspense } from "react";
import { DashboardTitle } from "../dashboard-title";
import { StatisticCardList } from "./statistic-card-list";

export const TodaySales: FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[5px]">
        <DashboardTitle title="today's sales" />
        <p className="capitalize font-medium text-[22px]">sales summary</p>
      </div>

      <div className="">
        <Suspense fallback={<>Loading...</>}>
          <StatisticCardList />
        </Suspense>
      </div>
    </div>
  );
};
