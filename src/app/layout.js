import LayoutProvider from "@/components/layoutProvider/LayoutProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "@/utils/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel App",
  description: "Travel Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast/>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
