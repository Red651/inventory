import { z } from 'zod';

export const User = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string(),
  displayName: z.string().nullable(),
  avatarUrl: z.string().url().nullable(),
});

export type User = z.infer<typeof User>;


export const Admin = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email().nullable(),
  status: z.enum(['active', 'inactive']),
  created_at: z.coerce.date().transform((date) => {
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
  }),
  updated_at: z.coerce.date().transform((date) => {
      return new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
      }).format(date);
  }),
});

export type Admin = z.infer<typeof Admin>;

export const AdminsMetrics = z.object({
  total_admins: z.number(),
  active_admins: z.number(),
  inactive_admins: z.number(),
});

export const KKKSUser = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  kkks_id: z.string(),
  kkks_name: z.string(),
  kkks_area: z.string(),
  status: z.enum(['active', 'inactive']),
  created_at: z.coerce.date().transform((date) => {
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
  }),
  updated_at: z.coerce.date().transform((date) => {
      return new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
      }).format(date);
  }),
});

export type KKKSUser = z.infer<typeof KKKSUser>;

export const UsersMetrics = z.object({
  total_users: z.number(),
  active_users: z.number(),
  inactive_users: z.number(),
});