"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const authPages = ["/login", "/signup"];
  const isAuthPage = authPages.includes(pathname);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <Footer />}
      </QueryClientProvider>
    </>
  );
};

export default LayoutProvider;
