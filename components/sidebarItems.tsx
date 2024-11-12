import { BookOpen, Headset, House, Settings, UserPen } from "lucide-react";

export const sidebarItems = [
  {
    name: "Home",
    path: "/",
    icon: <House size={20} />,
  },
  {
    name: "Support",
    path: "/support",
    icon: <Headset size={20} />,
  },
  {
    name: "resources",
    path: "/resources",
    icon: <BookOpen size={20} />,
  },
  {
    name: "Your Profile",
    path: "/profile",
    icon: <UserPen size={20} />,
  },
  {
    name: "Organization",
    path: "/organization",
    icon: <Settings size={20} />,
  },
];
