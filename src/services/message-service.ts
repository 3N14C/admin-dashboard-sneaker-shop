import { axiosInstanse } from "@/configs/axios-config";
import { MessageType } from "@/types/message-type";

export const MessageService = {
  getAllByChatId: async ({ id }: { id: string }) => {
    const response = await axiosInstanse.get<MessageType[]>(
      "message/get-by-chat-id",
      {
        params: {
          id,
        },
      }
    );

    return response.data;
  },

  sendMessage: async (data: {
    userId: string;
    chatId: string;
    message: string;
  }) => {
    const response = await axiosInstanse.post<MessageType>(
      "message/create",
      data
    );

    return response.data;
  },
};
