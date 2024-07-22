import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn(manrope.className, "antialiased max-w-xl md:mx-14 mx-10 mt-8 lg:mx-auto")}>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">  
            {children}
            <Footer />
          </main>
      </body>

    </html>
  );
}
