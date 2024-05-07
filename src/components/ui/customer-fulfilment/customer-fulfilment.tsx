import { FC } from "react";
import { DashboardTitle } from "../dashboard-title";

export const CustomerFulfilment: FC = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <DashboardTitle title="Customer Fulfilment" />
        </div>
    );
}