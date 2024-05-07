import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { NextPage } from "next";
import { Link } from "next-view-transitions";
import { FormSignIn } from "./_components/form-sign-in";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <FormSignIn />;
};

export default Page;
