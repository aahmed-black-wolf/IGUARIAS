import { z } from 'zod';

export const signUpSchema = z.object({
  phone: z.string().min(6),
  fullName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(20),
  confirmPassword: z.string().min(6).max(20),
  terms: z.boolean().refine((val) => val === true),
});

export const signUpFields = [
  { name: "fullName", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password" },
];

export type signUpType = z.infer<typeof signUpSchema>;
