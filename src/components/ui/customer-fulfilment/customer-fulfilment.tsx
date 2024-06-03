"use client";

import { FC, useEffect, useState } from "react";
import { DashboardTitle } from "../dashboard-title";
import { XAxis, YAxis, Tooltip, Area, AreaChart, Legend } from "recharts";

const data = [
  {
    name: "Январь",
    uv: 500,
    пользователи: 300,
    amt: 2400,
  },
  {
    name: "Февраль",
    uv: 500,
    пользователи: 183,
    amt: 2210,
  },
  {
    name: "Март",
    uv: 500,
    пользователи: 341,
    amt: 2290,
  },
  {
    name: "Апрель",
    uv: 500,
    пользователи: 175,
    amt: 2000,
  },
  {
    name: "Май",
    uv: 500,
    пользователи: 90,
    amt: 2181,
  },
  {
    name: "Июнь",
    uv: 500,
    пользователи: 65,
    amt: 2500,
  },
];

export const CustomerFulfilment: FC = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="flex flex-col gap-[20px]">
      <DashboardTitle title="График пользователей" />

      <div className="">
        <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <Tooltip
            contentStyle={{
              backgroundColor: "#21222d",
              color: "white",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="пользователи"
            stroke="#c1fffb"
            fill="#789b9a"
            strokeWidth={4}
            animateNewValues
          />
        </AreaChart>
        <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <Tooltip
            contentStyle={{
              backgroundColor: "#21222d",
              color: "white",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="пользователи"
            stroke="#f2c8ed"
            fill="#8e7a91"
            strokeWidth={4}
          />
        </AreaChart>
      </div>
    </div>
  );
};
