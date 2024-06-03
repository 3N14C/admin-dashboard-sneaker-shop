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
    name: "Панель",
    href: "/",
    icon: "Home",
  },

  {
    id: "users",
    name: "Пользователи",
    href: "/users",
    icon: "User",
  },

  {
    id: "leaderboard",
    name: "Таблица",
    href: "/leaderboard",
    icon: "BarChart2",
  },

  {
    id: "order",
    name: "Заказы",
    href: "/order",
    icon: "ShoppingCart",
  },

  {
    id: "product",
    name: "Товары",
    href: "/products",
    icon: "ShoppingBag",
  },

  {
    id: "sales-report",
    name: "Отчет",
    href: "/sales-report",
    icon: "BarChart",
  },

  {
    id: "message",
    name: "Сообщения",
    href: "/message",
    icon: "MessageCircle",
  },

  {
    id: "settings",
    name: "Настройки",
    href: "/settings",
    icon: "Settings",
  },

  {
    id: "favourite",
    name: "Избранное",
    href: "/favourite",
    icon: "Star",
  },

  {
    id: "history",
    name: "История",
    href: "/history",
    icon: "History",
  },
];
