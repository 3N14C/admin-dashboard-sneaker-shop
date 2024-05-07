"use client";

import { loginAction } from "@/actions/login-action";
import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { Link } from "next-view-transitions";
import { FC, FormEvent } from "react";

export const FormSignIn: FC = () => {
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await loginAction({
      email: formData.get("email")!.toString(),
      password: formData.get("password")!.toString(),
    });
  };

  return (
    <DashboardCardLayout className="">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-white font-semibold text-[32px]">Вход в аккаунт</p>
        <div className="mt-10 flex flex-col gap-[15px]">
          <input
            className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
            type="email"
            name="email"
            placeholder="Email..."
          />

          <input
            className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
            type="text"
            name="password"
            placeholder="Password..."
          />
        </div>

        <button type="submit">Войти</button>
        <Link href={"/auth/sign-up"}>Новый акк</Link>
      </form>
    </DashboardCardLayout>
  );
};
