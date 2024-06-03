import { DashboardTitle } from "@/components/ui/dashboard-title";
import { NextPage } from "next";
import { MessageList } from "./_components/message-list";

interface Props {
  params: {
    chatId: string;
  };
}

const Page: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <DashboardTitle backButton title="Сообщения" />

      <div className="mt-10">
        <MessageList chatId={params.chatId} />
      </div>
    </div>
  );
};

export default Page;
