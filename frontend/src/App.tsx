
import './global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/query-client';
import { AuthProvider } from '@/providers/auth-provider';
import { Router } from '@/routes/router';
import { ThemeProvider } from './components/theme-provider';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
  );
}
