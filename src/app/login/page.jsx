"use client";

import { loginValidation } from "@/lib/schemaValidation";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidation),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await signIn("credentials", { ...data, redirect: false });

      if (!res?.error) {
        router.push("/");
      } else {
        toast.error(res.error || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Login Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/paris.jpg"
          alt="Login background"
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Email Input */}
          <div>
            <Input
              className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
              type="email"
              placeholder="John@gmail.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
              className="w-full border border-slate-400 py-2 px-4 rounded-md outline-none focus:border-slate-600"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: "Password is required" })}
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
            label="Login"
            className="w-3/4 mx-auto mt-12 cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
