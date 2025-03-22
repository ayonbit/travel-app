import { z } from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerValidation = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
