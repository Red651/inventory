import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { loadAccessToken } from '@/api/axios';
import { getUserInfo } from '@/api/resources';
// import { getAccountInfo } from '@/api/resources';

interface AuthContextValues {
  isAuthenticated: boolean;
  isInitialized: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValues | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    loadAccessToken();
    getUserInfo()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsInitialized(true));
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isInitialized, setIsAuthenticated }),
    [isAuthenticated, isInitialized]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
