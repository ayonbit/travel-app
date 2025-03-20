"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && <Navbar />}
      {children}
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
};

export default LayoutProvider;
