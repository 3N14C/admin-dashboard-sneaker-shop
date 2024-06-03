"use client";

import { Search } from "lucide-react";
import { FC } from "react";
import { Profile } from "./ui/profile/profile";

export const InputSearch: FC = () => {
  return (
    <div className="grid grid-cols-4 items-center">
      <div className="flex items-center gap-2 bg-[#21222d] rounded-[8px] p-[15px] col-span-3">
        <Search />
        <input
          placeholder="Поиск..."
          className="focus:outline-none bg-[#21222d] border-none focus:ring-0"
          type="text"
        />
      </div>

      <div className="justify-self-end">
        <Profile />
      </div>
    </div>
  );
};
