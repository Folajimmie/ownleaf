import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import { Bell } from "lucide-react";

const optima = localFont({
  src: "./fonts/OPTIMA.woff",
  variable: "--font-optima",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Ownleaf",
    default: "Ownleaf",
  },
  description: "Your HR response service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${optima.variable} ${inter.className}  min-h-screen flex flex-col lg:flex-row items-center justify-center relative`}
      >
        <Sidebar />

        <main className="flex-1 w-full lg:w-auto lg:ml-32 lg:mr-8 max-w-4xl">
          {children}
        </main>

        <Bell
          size={40}
          className="hidden lg:block absolute top-[32px] right-[34px] p-2 bg-gray-100 rounded-full text-gray-400 cursor-pointer"
        />
      </body>
    </html>
  );
}
