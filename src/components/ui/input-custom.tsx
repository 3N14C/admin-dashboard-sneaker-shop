import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const InputCustom: FC<IProps> = ({ label, className, ...props }) => {
  return (
    <div className="">
      <p className="">{label}</p>
      <input
      {...props}
        className={cn(
          "focus:outline-none focus:ring-0 border-none bg-[#171821] rounded-[8px] p-[15px] w-full",
          className
        )}
        type="text"
      />
    </div>
  );
};
