"use client";

import { FC, useEffect, useState } from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import { DashboardTitle } from "../dashboard-title";

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
  {
    name: "Июль",
    uv: 500,
    пользователи: 230,
    amt: 2100,
  },
  {
    name: "Август",
    uv: 500,
    пользователи: 110,
    amt: 2181,
  },
  {
    name: "Сентябрь",
    uv: 500,
    пользователи: 280,
    amt: 2500,
  },
  {
    name: "Октябрь",
    uv: 500,
    пользователи: 300,
    amt: 2100,
  },
  {
    name: "Ноябрь",
    uv: 500,
    пользователи: 450,
    amt: 2500,
  },
  {
    name: "Декабрь",
    uv: 500,
    пользователи: 300,
    amt: 2100,
  },
];

export const VisitorInsights: FC = () => {
const [mount, setMount] = useState<boolean>(false);

useEffect(() => {
  setMount(true);
}, []);

if (!mount) return null;

  return (
    <div>
      <DashboardTitle title="График посетителей" />

      <div className="mt-2">
        <AreaChart
          width={1190}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <XAxis dataKey="name" />
          <YAxis dataKey={"uv"} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#21222d",
              color: "white",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          />
          <Area
            type="monotone"
            dataKey="пользователи"
            stroke="#c1fffb"
            fill="#789b9a"
            strokeWidth={4}
          />
        </AreaChart>
      </div>
    </div>
  );
};
