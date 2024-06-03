"use server";

import { axiosInstanse } from "@/configs/axios-config";
import { UserType } from "@/types/user-type";
import { cookies } from "next/headers";

export const getSession = async () => {
  const token = cookies().get("admin-dashboard-token")?.value;

  const response = await axiosInstanse.get<UserType>("auth/get-session", {
    params: {
      token,
    },
  });

  return response.data
};
