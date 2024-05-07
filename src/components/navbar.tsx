"use client";

import { navbar } from "@/constants/navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Icon } from "./ui/icon";
import { NavbarButton } from "./ui/navbar-button";
import { signOut, useSession } from "next-auth/react";

export const Navbar: FC = () => {
  const pathname = usePathname();
  const { data: user } = useSession();
  console.log("@navbar", user);

  return (
    <div className="relative">
      <div className="w-0.5 bg-[#2C2D33] h-screen absolute -right-[16px]" />
      <div className="flex flex-col gap-[35px] pt-[70px]">
        {navbar.map((item) => (
          <NavbarButton
            key={item.id}
            href={item.href}
            className={cn(
              "px-[15px] rounded-[6px] py-[10px] transition duration-300",
              {
                "text-[#171821] bg-[#a9dfd8] cursor-default":
                  pathname === item.href,
                "hover:bg-[#21222d]": pathname !== item.href,
              }
            )}
          >
            <span className="flex items-center gap-2 font-semibold text-[14px] select-none">
              <Icon
                size={16}
                name={item.icon}
                fill={pathname === item.href ? "#171821" : "none"}
              />
              {item.name}
            </span>
          </NavbarButton>
        ))}

        {!user ? (
          <NavbarButton
            href={"/api/auth/signin"}
            className={cn(
              "px-[15px] rounded-[6px] py-[10px] transition duration-300",
              {
                "text-[#171821] bg-[#a9dfd8] cursor-default":
                  pathname === "/auth/sign-in",
                "hover:bg-[#21222d]": pathname !== "/auth/sign-in",
              }
            )}
          >
            <span className="flex items-center gap-2 font-semibold text-[14px] select-none">
              <Icon
                size={16}
                name={"LogIn"}
                fill={pathname === "/auth/sign-in" ? "#171821" : "none"}
              />
              Sign In
            </span>
          </NavbarButton>
        ) : (
          <div
            onClick={async () => await signOut()}
            className={cn(
              "px-[15px] rounded-[6px] py-[10px] transition duration-300 cursor-pointer",
              {
                "text-[#171821] bg-[#a9dfd8] cursor-default":
                  pathname === "/auth/sign-in",
                "hover:bg-[#21222d]": pathname !== "/auth/sign-in",
              }
            )}
          >
            <span className="flex items-center gap-2 font-semibold text-[14px] select-none">
              <Icon
                size={16}
                name={"LogIn"}
                fill={pathname === "/auth/sign-in" ? "#171821" : "none"}
              />
              Sign Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
