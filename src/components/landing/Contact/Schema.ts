import { z } from 'zod';

export const fieldsLabels = [
  { name: "firstName", type: "text", label: "first_name" },
  { name: "lastName", type: "", label: "last_name" },
  { name: "email", type: "", label: "email" },
  { name: "phone", type: "", label: "phone" },
];
export const contactSchema = z.object({
  firstName: z
    .string({ message: "invalid_first_name" })
    .min(3, { message: "invalid_first_name" })
    .max(20, { message: "invalid_first_name" }),
  lastName: z
    .string({ message: "invalid_last_name" })
    .min(3, { message: "invalid_last_name" })
    .max(20, { message: "invalid_last_name" }),
  email: z
    .string({ message: "invalid_email" })
    .email({ message: "invalid_email" }),
  phone: z
    .string({ message: "invalid_phone" })
    .min(6, { message: "invalid_phone" })
    .max(12, { message: "invalid_phone" }),
  message: z
    .string({ message: "invalid_message" })
    .min(50, { message: "invalid_message" })
    .max(1000, { message: "invalid_message" }),
  gender: z.enum(["male", "female", "other"]).default("male"),
  country: z
    .string({ message: "invalid_country" })
    .min(2, { message: "invalid_country" })
    .max(40, { message: "invalid_country" }),
});
export type contactType = z.infer<typeof contactSchema>;
