"use client";

import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { Link } from "next-view-transitions";
import { FC, FormEvent } from "react";

export const FormSignUp: FC = () => {
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    console.log({ response });
  };

  return (
    <DashboardCardLayout className="">
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-white font-semibold text-[32px]">Создать аккаунт</p>
        <div className="mt-10 flex flex-col gap-[15px]">
          <input
            className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
            type="text"
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
        <Link href={"/auth/sign-in"}>Уже есть акк?</Link>
      </form>
    </DashboardCardLayout>
  );
};
