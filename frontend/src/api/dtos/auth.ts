import { z } from 'zod';

export const LoginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginRequestSchema = z.infer<typeof LoginRequestSchema>;

export const LoginResponseSchema = z.object({
  message: z.string(),
  success: z.boolean(),
  token: z.string(),
});
