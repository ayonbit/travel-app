"use client";

import { registerValidation } from "@/lib/schemaValidation";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import AXIOS_API from "@/utils/axiosAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidation),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await AXIOS_API.post("/register", data);
      toast.success("Account created.Redirecting to login...");

      setTimeout(() => router.push("/login"), 3000);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/dubai.jpg"
          alt="Signup background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Signup Form */}
      <div className="relative w-[90%] max-w-[400px] bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-center font-semibold text-slate-800 text-2xl border-b pb-4 border-slate-300">
          Create an account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Username */}
          <div>
            <Input
              className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
              type="text"
              placeholder="john123"
              register={register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
              type="email"
              placeholder="demo@demo.com"
              register={register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
              type="password"
              placeholder="Ie:Demo#123"
              register={register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            disabled={isLoading}
            className="w-3/4 mt-12 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
            label="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
