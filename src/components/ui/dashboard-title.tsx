import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  title: string;
  className?: string;
}

export const DashboardTitle: FC<IProps> = ({ title, className }) => {
  return (
    <p
      className={cn(
        "capitalize font-semibold text-[36px] text-white",
        className
      )}
    >
      {title}
    </p>
  );
};
