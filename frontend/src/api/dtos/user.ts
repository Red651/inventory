import { z } from 'zod';
import { dateSchema } from '@/utilities/date';

export const CreateAdmin = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    is_active: z.boolean(),
});

export const CreateUser = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string(),
    kkks_id: z.string(),
    password: z.string(),
    is_active: z.boolean(),
});