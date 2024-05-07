import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { axiosInstanse } from "@/configs/axios-config";
import { NextPage } from "next";
import { Link } from "next-view-transitions";
import { FormEvent } from "react";
import { FormSignUp } from "./_components/form-sign-up";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <FormSignUp />;
};

export default Page;
