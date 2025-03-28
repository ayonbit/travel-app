import LayoutProvider from "@/components/layoutProvider/LayoutProvider";
import Toast from "@/utils/toast";

import Provider from "@/utils/sessionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel App",
  description: "Travel Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toast />
          <LayoutProvider>{children}</LayoutProvider>
        </Provider>
      </body>
    </html>
  );
}
