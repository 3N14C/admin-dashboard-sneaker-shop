"use client";

import { navbar } from "@/constants/navbar";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { Icon } from "./ui/icon";
import { NavbarButton } from "./ui/navbar-button";
import { useSession } from "@/hooks/use-session";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth-service";
import { Loader2 } from "lucide-react";

export const Navbar: FC = () => {
  const router = useRouter()
  const pathname = usePathname();
  const { user } = useSession();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthService.signOut,
    onSuccess: () => {
      return router.replace("/auth/sign-in");
    }
  });

  const handleLogout = async () => {
    await mutateAsync();
  };

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
                "text-[#171821] bg-[#a9dfd8]":
                  pathname === item.href,
                "hover:bg-[#21222d]": !pathname.includes(item.id),
                "text-[#171821] bg-[#a9dfd8] cursor-default": pathname.includes(item.id),
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
            href={"/auth/sign-in"}
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
              Вход
            </span>
          </NavbarButton>
        ) : (
          <div
            onClick={handleLogout}
            className={cn(
              "px-[15px] rounded-[6px] py-[10px] transition duration-300 cursor-pointer",
              {
                "text-[#171821] bg-[#a9dfd8] cursor-default":
                  pathname === "/auth/sign-in",
                "hover:bg-[#21222d]": pathname !== "/auth/sign-in",
              }
            )}
          >
            {isPending ? (
              <Loader2 className="animate-spin flex items-center justify-center w-full" />
            ) : (
              <span className="flex items-center gap-2 font-semibold text-[14px] select-none">
                <Icon
                  size={16}
                  name={"LogIn"}
                  fill={pathname === "/auth/sign-in" ? "#171821" : "none"}
                />
                Выход
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
