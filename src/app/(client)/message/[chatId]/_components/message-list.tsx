"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "@/hooks/use-session";
import { cn } from "@/lib/utils";
import { MessageService } from "@/services/message-service";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { FC, useState } from "react";
import { MessageInput } from "./message-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "next-view-transitions";

interface IProps {
  chatId: string;
}

export const MessageList: FC<IProps> = ({ chatId }) => {
  const { user } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: messages } = useQuery({
    queryKey: ["all-messages-by-chat", chatId, isLoading],
    queryFn: () => MessageService.getAllByChatId({ id: chatId }),
    refetchInterval: 1000,
  });

  return (
    <div className="">
      <ScrollArea className="h-[600px] px-3">
        <div className="w-full flex flex-col gap-2">
          {messages
            ?.sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
            .map((message) => (
              <div
                key={message.id}
                className={cn("flex items-center justify-start", {
                  "justify-end": message.userId === user?.id,
                })}
              >
                <div className="">
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Avatar
                            className={cn("hidden", {
                              block: message.userId !== user?.id,
                            })}
                          >
                            <AvatarImage />
                            <AvatarFallback className="bg-[#21222d]">
                              {message.user?.username[0]}
                            </AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#21222d] border-none">
                          <Link href={`/users/${message.user?.id}`} className="text-white">Профиль</Link>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <div
                      className={cn(
                        "bg-[#80a8a3] p-4 rounded-lg max-w-[400px]",
                        {
                          "bg-[#21222d]": message.userId !== user?.id,
                        }
                      )}
                    >
                      <p
                        className={cn("text-[#21222d]", {
                          "text-[#80a8a3]": message.userId !== user?.id,
                        })}
                      >
                        {message.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <p
                      className={cn("", {
                        // "text-[#21222d]": message.userId === user?.id,
                      })}
                    >
                      {moment(message.createdAt).format("HH:mm")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </ScrollArea>

      <div className="mt-5">
        <MessageInput
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          chatId={chatId}
        />
      </div>
    </div>
  );
};
