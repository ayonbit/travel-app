"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const authPages = ["/login", "/signup"];
  const isAuthPage = authPages.includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default LayoutProvider;
