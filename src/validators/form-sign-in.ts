import { z } from "zod";

export const formSignIn = z.object({
  email: z.string().email("Некорректная почта"),
  password: z.string().min(6, "Минимальная длина пароля 6 символов"),
});
