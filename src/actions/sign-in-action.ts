"use server";

import { axiosInstanse } from "@/configs/axios-config";
import { formSignIn } from "@/validators/form-sign-in";
import { cookies } from "next/headers";
import { z } from "zod";

export const signIn = async (data: z.infer<typeof formSignIn>) => {
  const response = await axiosInstanse.post<{ token: string }>("auth/sign-in", data);

  cookies().set("admin-dashboard-token", response.data.token);

  return response.data;
};
