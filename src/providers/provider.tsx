"use client";

import { FC } from "react";
import { ViewTransitions } from "next-view-transitions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

interface IProps {
  children: React.ReactNode;
}

export const Provider: FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ViewTransitions>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </ViewTransitions>
  );
};
