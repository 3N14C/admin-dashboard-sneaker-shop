import { getSession } from "@/actions/get-session-action";
import { signIn } from "@/actions/sign-in-action";
import { signOut } from "@/actions/sign-out-action";
import { formSignIn } from "@/validators/form-sign-in";
import { z } from "zod";

export const AuthService = {
  getSession: async () => await getSession(),

  signIn: async (data: z.infer<typeof formSignIn>) =>
    await signIn({
      email: data.email,
      password: data.password,
    }),

  signOut: async () => signOut(),
};
