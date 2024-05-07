"use client";

import { FC } from "react";
import { icons } from "lucide-react";

interface IProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size: number;
}

export const Icon: FC<IProps> = ({ name, size, ...props }) => {
  const Icon = icons[name];

  return <Icon name={name} size={size} {...props} />;
};
