"use client";

import { InputCustom } from "@/components/ui/input-custom";
import { cn } from "@/lib/utils";
import { SneakerType } from "@/types/sneaker-type";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IProps {
  sneaker: SneakerType;
}

export const SneakerForm: FC<IProps> = ({ sneaker }) => {
  const schema = z.object({
    name: z.string().min(1, "Поле не может быть пустым"),
    img: z.string().min(1, "Поле не может быть пустым"),
    price: z.number().min(1, "Поле не может быть пустым"),
    description: z.string().min(1, "Поле не может быть пустым"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: {
      name: sneaker.name,
      img: sneaker.img?.[0],
      price: sneaker.price,
      description: sneaker.description,
    },
  });

  return (
    <div className="bg-[#21222d] rounded-lg">
      <div className="flex items-center gap-3">
        <Image
          src={sneaker.img?.[0]}
          alt={sneaker.name}
          width={1000}
          height={1000}
          className="w-[300px]"
        />
        <div className="flex flex-col gap-3">
          <input
            placeholder="Название"
            {...register("name")}
            className={cn(
              "focus:outline-none focus:ring-0 border-none bg-[#171821] rounded-[8px] p-[15px] w-full"
            )}
            type="text"
          />
          <input
            placeholder="Название"
            {...register("description")}
            className={cn(
              "focus:outline-none focus:ring-0 border-none bg-[#171821] rounded-[8px] p-[15px] w-full"
            )}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
