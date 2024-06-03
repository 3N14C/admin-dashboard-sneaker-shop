"use client";

import { FC, useEffect, useState } from "react";
import { DashboardTitle } from "../dashboard-title";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const Level: FC = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="">
      <DashboardTitle title="Level" />

      <ResponsiveContainer width={370} height={300}>
        <BarChart width={900} height={300} data={data}>
          <Bar dataKey="uv" fill="#a9dfd8" background={{ fill: "#2b2b36" }} />
          <Legend />
          <Tooltip
            contentStyle={{
              backgroundColor: "#21222d",
              color: "white",
              borderRadius: "10px",
              borderWidth: 0,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
