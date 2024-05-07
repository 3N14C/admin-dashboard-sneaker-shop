import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardCardLayout: FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-[#21222d] px-[15px] py-[20px] rounded-[10px]",
        className
      )}
    >
      {children}
    </div>
  );
};
