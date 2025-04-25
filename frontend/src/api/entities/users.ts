import { z } from 'zod';

export const User = z.object({
  message: z.string(),
  success: z.boolean(),
  user: z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    role: z.string()
  }),
})

export type User = z.infer<typeof User>;