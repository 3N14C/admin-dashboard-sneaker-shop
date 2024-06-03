"use client";

import { ChatService } from "@/services/chat-service";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { ChatCard } from "./chat-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const ChatList: FC = () => {
  const { data: chats } = useQuery({
    queryKey: ["messages"],
    queryFn: ChatService.getAll,
  });

  return (
    <ScrollArea
      className={cn("", {
        "h-[730px]": chats && chats?.length > 3,
      })}
    >
      <div className="flex flex-col gap-10">
        {chats?.map((chat) => <ChatCard key={chat.id} chat={chat} />)}
      </div>
    </ScrollArea>
  );
};
