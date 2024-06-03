import { CustomerFulfilment } from "@/components/ui/customer-fulfilment/customer-fulfilment";
import { Earnings } from "@/components/ui/earnings/earnings";
import { Level } from "@/components/ui/level/level";
import { DashboardCardLayout } from "@/components/ui/today-sales/dashboard-card-layout";
import { TodaySales } from "@/components/ui/today-sales/today-sales";
import { TopProducts } from "@/components/ui/top-products/top-products";
import { VisitorInsights } from "@/components/ui/visitor-insights/visitor-insights";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <div className="grid grid-cols-4 gap-[15px]">
      <DashboardCardLayout className="col-span-3">
        <TodaySales />
      </DashboardCardLayout>

      <DashboardCardLayout>
        <Level />
      </DashboardCardLayout>

      <DashboardCardLayout className="col-span-3">
        <TopProducts />
      </DashboardCardLayout>

      <DashboardCardLayout>
        <CustomerFulfilment />
      </DashboardCardLayout>

      <DashboardCardLayout className="">
        <Earnings />
      </DashboardCardLayout>

      <DashboardCardLayout className="col-span-3">
        <VisitorInsights />
      </DashboardCardLayout>
    </div>
  );
};

export default Page;
