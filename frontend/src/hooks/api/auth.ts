import { z } from 'zod';
import { toast } from "sonner"
import { removeClientAccessToken, setClientAccessToken } from '@/api/axios';
import { LoginRequestSchema, LoginResponseSchema } from '@/api/dtos';
import { createGetQueryHook, createPostMutationHook } from '@/api/helpers';
import { User } from '@/api/entities';

export const useLogin = createPostMutationHook({
  endpoint: '/auth/login', // Updated endpoint
  bodySchema: LoginRequestSchema, // Body schema for request validation
  responseSchema: LoginResponseSchema, // Response schema for response validation
  rMutationParams: {
    onSuccess: (data) => {
      setClientAccessToken(data.token); // Set the access token
      toast.success("Login berhasil!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  },
  options: {
    isMultipart: false, // Ensure this is set to false for form-urlencoded
  },
});

export const useLogout = createPostMutationHook({
  endpoint: 'auth/logout',
  bodySchema: z.null(),
  responseSchema: z.any(),
  rMutationParams: {
    onSuccess: () => {
      removeClientAccessToken();
      toast.success("Logout berhasil!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  },
});

export const useGetUserInfo = createGetQueryHook({
  endpoint: 'auth/me',
  responseSchema: User,
  rQueryParams: { queryKey: ['getUser'] },
});
