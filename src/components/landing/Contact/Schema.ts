import { z } from 'zod';

export const fieldsLabels = [
  { name: "firstName", type: "text", label: "first_name" },
  { name: "lastName", type: "", label: "last_name" },
  { name: "email", type: "", label: "email" },
  { name: "phone", type: "", label: "phone" },
];
export const contactSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  phone: z.string().min(6).max(12),
  message: z.string().min(50).max(1000),
  gender: z.enum(["male", "female", "other"]).default("male"),
  country: z.string().min(2).max(40),
});
export type contactType = z.infer<typeof contactSchema>;
