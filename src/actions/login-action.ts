"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/validators/login-validator";
import { z } from "zod";

export const loginAction = async (formData: z.infer<typeof loginSchema>) => {
  await signIn("credentials", {
    email: formData.email,
    password: formData.password,
    redirectTo: "/",
  });
};
