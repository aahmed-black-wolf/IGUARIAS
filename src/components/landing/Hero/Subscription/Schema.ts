import { z } from 'zod';

export const subscriptionSchema = z.object({
  email: z.string().email(),
  terms: z.boolean().refine((val) => val === true),
});

export type subscriptionType = z.infer<typeof subscriptionSchema>;
