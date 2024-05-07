import { Bell, ChevronDown, User, Users } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import styles from "./profile.module.css";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export const Profile: FC = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <Bell size={25} />

      <div tabIndex={0} className={cn("cursor-pointer", styles.profile)}>
        <Image
          src={"https://i.pravatar.cc/300"}
          width={40}
          height={40}
          alt="profile"
          className={cn("rounded-full")}
        />

        <ChevronDown className={styles.chevrondown} />

        <div className={cn("space-y-3", styles.dropdown)}>
          <div className="flex items-center hover:bg-[#171821] transition duration-300 px-3">
            <User />
            <Link href="/my-profile" className="px-4 py-2 text-sm">
              Your Profile
            </Link>
          </div>

          <div className="flex items-center hover:bg-[#171821] transition duration-300 px-3">
            <Users />
            <Link href="/accounts" className="px-4 py-2 text-sm">
              Accounts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
