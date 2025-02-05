"use client";

import { FC, useEffect, useState } from "react";
import { DashboardTitle } from "../dashboard-title";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 20, color: "#a9dfd8" },
  { name: "B", value: 45, color: "#a9dfd8" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (
  value: any,
  data: any,
  cx: any,
  cy: any,
  iR: any,
  oR: any,
  color: any
) => {
  let total = 0;
  data.forEach((v: any) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key={color} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key={`path-${color}`}
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export const Earnings: FC = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="w-full">
      <DashboardTitle title="Доход" />

     <ResponsiveContainer width={400} height={200}>
        <PieChart width={400} height={500}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          {needle(value, data, cx, cy, iR, oR, "#ffffff")}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
