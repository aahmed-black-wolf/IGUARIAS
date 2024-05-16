import { z } from 'zod';

export const subscriptionSchema = z.object({
  email: z.string().email(),
  terms: z.boolean(),
});

export type subscriptionType = z.infer<typeof subscriptionSchema>;
