"use client";

import Button from "@/ui/Button";
import Image from "next/image";

const Login = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/paris.jpg"
          alt="Login's image"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Login Form */}
      <div className="relative w-[90%] max-w-[400px] bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-center font-semibold text-slate-800 text-2xl border-b pb-4 border-slate-300">
          Log into your account
        </h2>
        <form className="mt-6 flex flex-col gap-4">
          <input
            className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
            type="email"
            placeholder="John@gmail.com"
          />
          <input
            className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
            type="password"
            placeholder="Enter Your Password"
          />
          <Button
            className="w-full mt-6 cursor-pointer rounded-lg py-2 text-lg text-white bg-blue-500 transition-all hover:bg-blue-600"
            label="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
