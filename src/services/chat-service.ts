import { axiosInstanse } from "@/configs/axios-config";
import { ChatType } from "@/types/chat-type";

export const ChatService = {
  getAll: async () => {
    const response = await axiosInstanse.get<ChatType[]>("chat/get-all");

    return response.data;
  },
};
