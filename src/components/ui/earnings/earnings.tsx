"use client";

import { FC } from "react";
import { DashboardTitle } from "../dashboard-title";
import { BarChart } from "@mui/x-charts/BarChart";
import { cheerfulFiestaPaletteDark } from "@mui/x-charts/colorPalettes";

export const Earnings: FC = () => {
  return (
    <div className="w-full">
      <DashboardTitle title="Earnings" />

      <div className="">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={300}
          height={300}
          colors={cheerfulFiestaPaletteDark}
        />
      </div>
    </div>
  );
};
