"use client";

import { DashboardTitle } from "@/components/ui/dashboard-title";
import { SneakerService } from "@/services/sneaker-service";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { SneakerForm } from "./sneaker-form";
import { SneakerType } from "@/types/sneaker-type";

interface IProps {
  sneakerId: string;
}

export const SneakerPage: FC<IProps> = ({ sneakerId }) => {
  const { data: sneaker, isLoading } = useQuery({
    queryKey: ["sneaker-by-id", sneakerId],
    queryFn: () => SneakerService.getById({ id: sneakerId }),
  });

  return (
    <div className="">
      <DashboardTitle backButton title={`Товар ${sneaker?.name}`} />

      <div className="mt-5">
        <SneakerForm sneaker={sneaker ?? ({} as SneakerType)} />
      </div>
    </div>
  );
};
