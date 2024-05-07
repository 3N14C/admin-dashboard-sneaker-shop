"use client";

import { FC } from "react";
import { ViewTransitions } from "next-view-transitions";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children: React.ReactNode;
}

export const Provider: FC<IProps> = ({ children }) => {
  return (
    <ViewTransitions>
      <SessionProvider>{children}</SessionProvider>
    </ViewTransitions>
  );
};
