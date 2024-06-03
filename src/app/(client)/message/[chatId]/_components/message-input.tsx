"use client";

import { useSession } from "@/hooks/use-session";
import { MessageService } from "@/services/message-service";
import { useMutation } from "@tanstack/react-query";
import { Loader2, MessageCircle, SendHorizonal } from "lucide-react";
import { FC, useState } from "react";
import { toast } from "sonner";

interface IProps {
  chatId: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MessageInput: FC<IProps> = ({
  chatId,
  isLoading,
  setIsLoading,
}) => {
  const { user } = useSession();
  const [message, setMessage] = useState<string>("");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: MessageService.sendMessage,
    onSuccess: () => {
      toast.success("Сообщение отправлено");
      setMessage("");
      setIsLoading(false);
    },
  });

  const handleSumbit = async () => {
    if (!message && message.length === 0)
      return toast.error("Сообщение не может быть пустым");

    setIsLoading(true);
    await mutateAsync({
      chatId,
      userId: user?.id as string,
      message,
    });
  };

  return (
    <div className="flex items-center justify-between gap-10">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сообщение..."
        className="focus:outline-none focus:ring-0 border-none bg-[#21222d] rounded-[8px] p-[15px] w-full"
        type="text"
      />
      <div className="mr-10 cursor-pointer" onClick={handleSumbit}>
        {isPending ? <Loader2 className="animate-spin" /> : <SendHorizonal />}
      </div>
    </div>
  );
};
