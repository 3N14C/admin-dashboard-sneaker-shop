"use client";

import { SneakerType } from "@/types/sneaker-type";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  sneaker: SneakerType;
}

export const SneakerCard: FC<IProps> = ({ sneaker }) => {
  return (
    <Link href={`/products/${sneaker.id}`} className="bg-[#21222d] rounded-lg max-h-[300px] max-w-[200px] hover:bg-[#46555b] transition duration-300">
      <Image
        src={sneaker.img[0]}
        alt={sneaker.name}
        width={1000}
        height={1000}
        className="rounded-md w-[200px] h-[300px] hover:scale-105 transition duration-300"
      />
      <p>{sneaker.name}</p>
    </Link>
  );
};
