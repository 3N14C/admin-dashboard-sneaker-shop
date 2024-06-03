"use client";

import { useSession } from "@/hooks/use-session";
import { ChatType } from "@/types/chat-type";
import { FC } from "react";
import moment from "moment";
import { Link } from "next-view-transitions";

interface IProps {
  chat: ChatType;
}

export const ChatCard: FC<IProps> = ({ chat }) => {
  const { user } = useSession();

  console.log(user);

  return (
    <Link
      href={`/message/${chat.id}`}
      className="bg-[#21222d] p-10 rounded-lg hover:bg-[#2c2d33] transition duration-300"
    >
      {
        chat.message.map((message) => (
          <div key={message.id} className="">
            <div className="">
              <p className="">{message.message}</p>
              <div className="flex items-center gap-3">
                <p>{moment(message.createdAt).format("DD.MM.YYYY")}</p>
                <p>{moment(message.createdAt).format("HH:mm")}</p>
              </div>
            </div>
          </div>
        ))[chat.message.length - 1]
      }
    </Link>
  );
};
