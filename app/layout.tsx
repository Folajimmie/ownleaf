import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/sidebar";
import { Bell } from "lucide-react";


const optima = localFont({
  src: "./fonts/OPTIMA.woff",
  variable: "--font-optima",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | Ownleaf",
    default: "Ownleaf",
  },
  description: "Your HR responce service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${optima.variable} flex items-start justify-between relative`}
      >
        <Sidebar />
        <main className="flex-1">{children}</main>
        <div className="relative hidden w-[100px] lg:flex lg:justify-center lg:items-center z-50">
          <div className="p-2 mt-[32px] bg-gray-100 rounded-full text-gray-400">
            <Bell size={16} />
          </div>
        </div>
      </body>
    </html>
  );
}
