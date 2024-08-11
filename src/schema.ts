import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string().min(8, {
    message: "Password must 8 characters",
  }),
});

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string().min(8, {
    message: "Password must 8 characters",
  }),
});
