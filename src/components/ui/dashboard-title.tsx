"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface IProps {
  title: string;
  className?: string;
  backButton?: boolean;
}

export const DashboardTitle: FC<IProps> = ({
  title,
  className,
  backButton = false,
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      {backButton && (
        <ChevronLeft
          onClick={() => router.back()}
          className={cn("cursor-pointer")}
          size={25}
        />
      )}
      <p
        className={cn(
          "capitalize font-semibold text-[36px] text-white",
          className
        )}
      >
        {title}
      </p>
    </div>
  );
};
