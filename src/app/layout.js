import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/_components/header/NavBar.js";
import Info from "@/app/_components/footer/Info";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid!",
  description: "당신의 가장 빠른 IT 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      {children}
      <Info/>
      </body>
    </html>
  );
}
