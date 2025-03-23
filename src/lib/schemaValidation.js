import { optionLocations, optionTypes } from "@/data/data";
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

export const createValidation = z.object({
  name: z.string().min(1, { message: "Name is Required!" }),
  desc: z.string().min(1, { message: "Description is Required!" }),
  beds: z.number().min(1, { message: "Beds are required" }),
  hasFreeWifi: z.boolean().optional(),
  type: z.enum(optionTypes.map(({ value }) => value)),
  location: z.enum(optionLocations.map(({ value }) => value)),
  pricePerNight: z
    .number()
    .min(15, { message: "Price Must be above $15!" })
    .max(50000, { message: "Price can't be above $50000" }),
});
