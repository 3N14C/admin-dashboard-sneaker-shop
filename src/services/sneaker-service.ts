import { axiosInstanse } from "@/configs/axios-config";
import { SneakerType } from "@/types/sneaker-type";

export const SneakerService = {
  getAll: async ({ take }: { take?: number }) => {
    const response = await axiosInstanse.get<SneakerType[]>("sneaker/get-all", {
      params: {
        take,
      },
    });

    return response.data;
  },

  getById: async ({ id }: { id: string }) => {
    const response = await axiosInstanse.get<SneakerType>("sneaker/get-by-id", {
      params: {
        id,
      },
    });

    return response.data;
  },
};
