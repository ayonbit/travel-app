"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 h-16 w-full top-0 left-0 transition-all ${
        isScrolled ? "shadow-md backdrop-blur bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="h-full w-11/12 lg:w-2/3 mx-auto flex items-center justify-between">
        {/* Logo & Home Link */}
        <Link href="/" className="flex items-center gap-2 transition-all">
          <h1
            className={`text-2xl font-bold ${
              isScrolled ? "text-blue-600" : "text-gray-400"
            }`}
          >
            TravelWeb
          </h1>
          <AiOutlineHome
            size={25}
            className={`${isScrolled ? "text-blue-600" : "text-gray-400"}`}
          />
        </Link>

        {/* User Icon & Modal */}
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleModal}>
            <AiOutlineUser
              size={30}
              className={`${isScrolled ? "text-blue-600" : "text-gray-400"}`}
            />
          </div>

          {/* Modal */}
          {showModal && (
            <div
              onClick={toggleModal}
              className="absolute top-14 right-4 md:right-12 lg:right-16 shadow-md flex flex-col items-center gap-4 p-4 bg-white rounded-xl"
            >
              <Link
                href="/reservations"
                className="text-gray-700 hover:text-blue-600"
              >
                Reservations
              </Link>
              <button
                onClick={() => signOut()}
                className="text-gray-500 hover:text-red-500 transition-all"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
