import { isObjectEmpty } from 'helpers/isObjectEmpty';
import useLocalStorage from 'hooks/useLocalStorage';
import { createContext, useCallback, useContext, useMemo } from 'react';
import { redirect } from 'react-router-dom';

interface AuthContext {
  user: AuthUser | null;
  registerUser: (user: AuthUser) => void;
  clearUser: () => void;
}

interface AuthUser {
  name: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContext>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage<AuthUser>('user', {} as AuthUser);

  const registerUser = useCallback(
    (data: AuthUser) => {
      setUser(data);
      redirect('/');
    },
    [setUser]
  );

  const clearUser = useCallback(() => {
    setUser({} as AuthUser);
    redirect('/');
  }, [setUser]);

  const value = useMemo(
    () => ({
      user: isObjectEmpty(user) ? null : user,
      registerUser,
      clearUser,
    }),
    [user, registerUser, clearUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
