import { axiosInstanse } from "@/configs/axios-config";
import { UserType } from "@/types/user-type";

export const UserService = {
  getAllUsers: async () => {
    const response = await axiosInstanse.get<UserType[]>("user/get-users");

    return response.data;
  },
};
