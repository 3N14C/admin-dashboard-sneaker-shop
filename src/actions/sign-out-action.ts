"use server";

import { axiosInstanse } from "@/configs/axios-config";
import { cookies } from "next/headers";

export const signOut = async () => {
  const token = cookies().get("admin-dashboard-token")?.value;

  if (!token) return;

  const response = await axiosInstanse.post("/auth/sign-out", { token });

  if (response.status !== 200) return;

  cookies().delete("admin-dashboard-token");
  
  return response.data;
};
