"use client";

import { AuthService } from "@/services/auth-service";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useSession = () => {
  const pathname = usePathname();
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-session"],
    queryFn: AuthService.getSession,
  });

  useEffect(() => {
    refetch();
  }, [pathname]);

  return { user, isLoading };
};
