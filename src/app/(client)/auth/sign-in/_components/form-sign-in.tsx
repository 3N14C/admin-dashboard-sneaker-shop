"use client";

import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { AuthService } from "@/services/auth-service";
import { formSignIn } from "@/validators/form-sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
      toast.success("Аутентификация прошла успешно");
      return router.replace("/");
    },
    onError: (error) => {
      return toast.error("Неверная почта или пароль");
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
              placeholder="Электронный адрес"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="">
            <input
              {...register("password")}
              className="focu:outline-none bg-[#171821] rounded-[6px] px-[15px] py-[10px]"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <button
          disabled={isPending}
          type="submit"
          className="mt-10 bg-[#171821] px-20 py-4 rounded-lg hover:scale-105 hover:bg-[#46555b] transition duration-300"
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Войти"}
        </button>
      </form>
    </DashboardCardLayout>
  );
};
