import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
  terms: z.boolean().refine((val) => val === true),
});

export const loginFields = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

export type loginType = z.infer<typeof loginSchema>;
