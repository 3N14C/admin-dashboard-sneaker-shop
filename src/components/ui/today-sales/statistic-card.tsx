import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  icon: string;
  statisticNumber: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
}

export const StatisticCard: FC<IProps> = ({
  icon,
  statisticNumber,
  title,
  subtitle,
  subtitleColor,
}) => {
  return (
    <div className="bg-[#171821] px-[15px] py-[10px] rounded-[10px] max-w-fit">
      <Image src={`/icons/${icon}.svg`} width={50} height={50} alt={""} />

      <div className="mt-[10px] flex flex-col gap-[5px]">
        <p className="font-semibold text-[21px] text-white">
          {statisticNumber}
        </p>

        <p className="font-medium text-[18px] capitalize">{title}</p>

        <p className={cn("font-medium text-[16px]", subtitleColor)}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};
