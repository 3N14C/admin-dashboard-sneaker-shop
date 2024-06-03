"use client";

import { SneakerService } from "@/services/sneaker-service";
import { useQuery } from "@tanstack/react-query";
import { Link } from "next-view-transitions";
import { FC } from "react";
import { SneakerCard } from "./sneaker-card";

export const SneakerList: FC = () => {
  const { data: sneakers, isLoading } = useQuery({
    queryKey: ["all-sneakers"],
    queryFn: () => SneakerService.getAll({}),
  });

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
      {sneakers?.map((sneaker) => (
        <SneakerCard key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};
