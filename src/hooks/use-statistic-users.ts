import { UserService } from "@/services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useStatisticUsers = () => {
  const { data: users } = useQuery({
    queryKey: ["all-users"],
    queryFn: UserService.getAllUsers,
  });

  const todayUsers = users?.filter(
    (user) =>
      new Date(user.createdAt).toDateString() === new Date().toDateString()
  ).length;
  const yesterdayUsers = users?.filter(
    (user) =>
      new Date(user.createdAt).toDateString() ===
      new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()
  ).length;

  const percentageIncreaseUsers =
    todayUsers &&
    yesterdayUsers &&
    ((todayUsers - yesterdayUsers) / yesterdayUsers) * 100;

  return { todayUsers, yesterdayUsers, percentageIncreaseUsers };
};
