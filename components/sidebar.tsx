"use client";

import { useState } from "react";
import Link from "next/link";
import { sidebarItems } from "./sidebarItems";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const linkItemStyles = (isActive: boolean) => ({
    icon: isActive
      ? "bg-primary text-white"
      : "text-midGrey group-hover:bg-primary group-hover:text-white",
    name: isActive ? "text-primary" : "group-hover:text-primary",
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
          <Image src="/ownleaf-logo.png" height={60} width={60} alt="logo" />
        </Link>
        <button className="p-2 bg-gray-100 rounded-full text-gray-400">
          <Bell size={16} />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`lg:fixed lg:left-0 lg:top-0 lg:h-screen bg-secondary lg:bg-secondary lg:py-6 lg:px-4 z-40 ${
          isOpen
            ? "fixed left-0 top-16 h-screen w-[123px] bg-secondary z-50"
            : "hidden"
        } lg:block`}
      >
        <div
          className={`flex flex-col items-center space-y-4 ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-y-4`}
        >
          <div className="lg:w-full lg:flex lg:justify-center cursor-pointer hidden">
            <Link href="/">
              <Image
                src="/ownleaf-logo.png"
                height={100}
                width={100}
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-3">
            {sidebarItems.map((item) => {
              const { icon, name, path } = item;
              const { icon: iconStyles, name: nameStyles } = linkItemStyles(
                isActive(path)
              );

              return (
                <Link href={path} key={path}>
                  <div
                    onClick={closeSidebar}
                    className="flex flex-col items-center text-midGrey group w-full"
                  >
                    <span
                      className={`flex items-center justify-center p-3 rounded-md ${iconStyles}`}
                    >
                      {icon}
                    </span>
                    <span className={`text-center text-menu ${nameStyles}`}>{name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
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
