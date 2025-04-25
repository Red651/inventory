import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.string()
});

export type UserSchema = z.infer<typeof UserSchema>;

export const User = z.object({
  message: z.string(),
  success: z.boolean(),
  user: UserSchema
})

export type User = z.infer<typeof User>;