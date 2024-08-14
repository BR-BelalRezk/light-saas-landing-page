import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light SaaS",
  description: "light saas landing page",
  icons: {
    icon: "/logosaas.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          dmSans.className,
          "antialiased bg-[#eaeefe] overflow-x-hidden"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
