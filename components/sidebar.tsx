"use client";

import { useState } from "react";
import Link from "next/link";
import { sidebarItems } from "./sidebarItems";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  const isActive = (path: string) => path === pathname;

  const linkItemStyles = (active: boolean) => ({
    icon: active
      ? "bg-primary text-white"
      : "text-midGrey group-hover:bg-primary group-hover:text-white",
    name: active ? "text-primary" : "group-hover:text-primary",
  });

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <button
          className="p-2 text-gray-500 bg-gray-100 rounded-md"
          onClick={toggleSidebar}
        >
          <Menu size={16} />
        </button>
        <Link href="/" className="flex-shrink-0">
          <Image src="/ownleaf-logo.png" height={31} width={83} alt="logo" />
        </Link>
        <button className="p-2 bg-gray-100 rounded-full text-gray-400">
          <Bell size={16} />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`lg:fixed lg:left-0 lg:top-0 lg:h-screen bg-secondary lg:py-6 lg:px-4 z-40 ${
          isOpen
            ? "fixed top-16 left-0 w-[123px] h-full z-50 pt-3.5"
            : "hidden lg:block"
        }`}
      >
        <div className="hidden lg:block mb-[28px]">
          <Link href="/">
            <Image
              src="/ownleaf-logo.png"
              width={90}
              height={90}
              alt="logo"
            />
          </Link>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col items-center space-y-5">
          {sidebarItems.map(({ icon, name, path }) => {
            const { icon: iconStyles, name: nameStyles } = linkItemStyles(
              isActive(path)
            );

            return (
              <Link href={path} key={path}>
                <div
                  onClick={closeSidebar}
                  className="flex flex-col items-center space-y-2 text-midGrey group w-full"
                >
                  <span
                    className={`flex items-center justify-center p-[10px] ${
                      path === "/profile"
                        ? isActive(path)
                          ? "bg-primary text-white rounded-full mb-2"
                          : "bg-[#efc016] group-hover:bg-primary group-hover:text-white rounded-full mb-2"
                        : `${iconStyles} rounded-md`
                    }`}
                  >
                    {icon}
                  </span>
                  <span className={`text-center text-menu ${nameStyles}`}>
                    {name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-75 lg:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
