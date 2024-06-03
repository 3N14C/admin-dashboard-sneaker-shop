import { DashboardTitle } from "@/components/ui/dashboard-title";
import { NextPage } from "next";
import { ChatList } from "./_components/chat-list";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <DashboardTitle title="Чаты" />

      <div className="mt-10">
        <ChatList />
      </div>
    </div>
  );
};

export default Page;
