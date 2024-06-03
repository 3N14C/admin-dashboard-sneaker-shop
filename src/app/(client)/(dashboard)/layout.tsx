import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <ScrollArea className="h-[88vh]">
      <div className="">{children}</div>

      <ScrollBar />
    </ScrollArea>
  );
};

export default Layout;
