import { icons } from "lucide-react";

interface INavbar {
  id: string;
  name: string;
  href: string;
  icon: keyof typeof icons;
}

export const navbar: INavbar[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    href: "/",
    icon: "Home",
  },

  {
    id: "profile",
    name: "Profile",
    href: "/profile",
    icon: "User",
  },

  {
    id: "leaderboard",
    name: "Leaderboard",
    href: "/leaderboard",
    icon: "BarChart2",
  },

  {
    id: "order",
    name: "Order",
    href: "/order",
    icon: "ShoppingCart",
  },

  {
    id: "product",
    name: "Product",
    href: "/product",
    icon: "ShoppingBag",
  },

  {
    id: "sales-report",
    name: "Sales Report",
    href: "/sales-report",
    icon: "BarChart",
  },

  {
    id: "message",
    name: "Message",
    href: "/message",
    icon: "MessageCircle",
  },

  {
    id: "settings",
    name: "Settings",
    href: "/settings",
    icon: "Settings",
  },

  {
    id: "favourite",
    name: "Favourite",
    href: "/favourite",
    icon: "Star",
  },

  {
    id: "history",
    name: "History",
    href: "/history",
    icon: "History",
  },
];
