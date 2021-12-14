import { createContext } from "react";

import { useAuth } from "./auth-hooks";
import { SignInInput } from "./types";

export interface AuthState {
  user: string | undefined;
  signIn(input: SignInInput): Promise<any>;
  signOut(): Promise<void>;
}

export const AuthContext = createContext<AuthState>({
  user: undefined,
  signIn: async (_input) => {
    /* Initial State */
  },
  signOut: async () => {
    /* Initial State */
  },
});

interface AuthProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
