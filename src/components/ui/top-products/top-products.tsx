import { FC } from "react";
import { DashboardTitle } from "../dashboard-title";
import { axiosInstanse } from "@/configs/axios-config";
import { ISneaker } from "@/types/sneaker.interface";
import { cn } from "@/lib/utils";

const getSneakers = async () => {
  const response = await axiosInstanse.get<ISneaker[]>("/sneakers");

  return response.data;
};

export const TopProducts: FC = async () => {
  const sneakers = await getSneakers();

  const topSneakers = sneakers
    .sort((a, b) => b.soldCount - a.soldCount)
    .slice(0, 5);

  return (
    <div className="">
      <DashboardTitle title="top products" />

      <div className="">
        <div className="grid grid-cols-4 items-center border-b border-[#2c2d33] pt-[20px] pb-[10px]">
          <p className="font-medium text-[20px]">#</p>
          <p className="font-medium text-[20px]">Name</p>
          <p className="font-medium text-[20px]">Popularity</p>
          <p className="font-medium text-[20px]">Sales</p>
        </div>

        <div className="space-y-[10px]">
          {topSneakers.map((sneaker, idx) => (
            <div
              key={sneaker.id}
              className={cn("grid grid-cols-4 items-center py-[20px]", {
                "border-b border-[#2c2d33]": idx !== topSneakers.length - 1,
              })}
            >
              <p className="text-white text-base font-medium">0{idx + 1}</p>
              <p className="text-white text-base font-medium">{sneaker.name}</p>
              <div className="bg-[#2b2b36] w-2/3 h-1 rounded-full">
                <div
                  className={cn("h-1 rounded-full", {
                    "bg-[#FCB859]": idx === 0,
                    "bg-[#A9DFD8]": idx === 1,
                    "bg-[#28AEF3]": idx === 2,
                    "bg-[#F2C8ED]": idx === 3,
                    "bg-[#F9E0AE]": idx === 4,
                  })}
                  style={{
                    width:
                      idx === 0
                        ? `5${sneaker.soldCount}%`
                        : idx === 1
                          ? `3${sneaker.soldCount}%`
                          : `1${sneaker.soldCount}%`,
                  }}
                />
              </div>

              <div
                className={cn("border w-1/6 py-[5px] px-2 rounded-[4px]", {
                  "border-[#FCB859] bg-[#FCB859]/10": idx === 0,
                  "border-[#A9DFD8] bg-[#A9DFD8]/10": idx === 1,
                  "border-[#28AEF3] bg-[#28AEF3]/10": idx === 2,
                  "border-[#F2C8ED] bg-[#F2C8ED]/10": idx === 3,
                  "border-[#F9E0AE] bg-[#F9E0AE]/10": idx === 4,
                })}
              >
                <p
                  className={cn("text-base font-medium", {
                    "text-[#ff8a00]": idx === 0,
                    "text-[#A9DFD8]": idx === 1,
                    "text-[#28AEF3]": idx === 2,
                    "text-[#F2C8ED]": idx === 3,
                    "text-[#F9E0AE]": idx === 4,
                  })}
                >
                  {sneaker.soldCount}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
