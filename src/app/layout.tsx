import type { Metadata } from "next";
import { Inter as FontSans, League_Spartan } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", leagueSpartan.variable)}>
        {children}
      </body>
    </html>
  );
}
