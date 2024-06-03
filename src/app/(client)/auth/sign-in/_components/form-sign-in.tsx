"use client";

import { AuthService } from "@/services/auth-service";
import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { formSignIn } from "@/validators/form-sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "next-view-transitions";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

export const FormSignIn: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSignIn>>({
    resolver: zodResolver(formSignIn),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: AuthService.signIn,
    onSuccess: (data) => {
      console.log(data.token);
      return router.replace("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSignIn = async (data: z.infer<typeof formSignIn>) => {
    await mutateAsync({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <DashboardCardLayout className="">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-white font-semibold text-[32px]">Вход в аккаунт</p>
        <div className="mt-10 flex flex-col gap-[15px]">
          <div className="">
            <input
              {...register("email")}
              className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
              type="email"
              name="email"
              placeholder="Email..."
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="">
            <input
              {...register("password")}
              className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
              type="text"
              name="password"
              placeholder="Password..."
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <button type="submit">{isPending ? "Loading..." : "Войти"}</button>
        <Link href={"/auth/sign-up"}>Новый акк</Link>
      </form>
    </DashboardCardLayout>
  );
};
