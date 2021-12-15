import { useCallback, useContext, useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import SecureLS from "secure-ls";

import { SignInInput, SignUpInput } from "./types";
import { AuthContext, AuthState } from "./auth-context";

const encryptedLocalStorage = new SecureLS();

/* useAuth is used only to provide auth values to the app's global context AuthProvider. */
export function useAuth(): AuthState {
  const [user, setAdminUser] = useState<string | undefined>(
    encryptedLocalStorage.get("admin-user"),
  );

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        if (active) await Auth.currentAuthenticatedUser();
      } catch (error) {
        if (active) {
          setAdminUser(undefined);
          encryptedLocalStorage.remove("admin-user");
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [setAdminUser]);

  const signIn = useCallback(
    async ({ emailAddress, password }: SignInInput) => {
      const user = await Auth.signIn(emailAddress, password);
      encryptedLocalStorage.set("admin-user", user.username);
      setAdminUser(user.username);
    },
    [setAdminUser],
  );

  const signUp = useCallback(
    async ({ emailAddress, firstName, lastName, password }: SignUpInput) => {
      await Auth.signUp({
        username: emailAddress.trim(),
        password: password.trim(),
        attributes: { family_name: lastName.trim(), given_name: firstName.trim() },
      });
    },
    [],
  );

  const signOut = useCallback(async () => {
    await Auth.signOut();
    setAdminUser(undefined);
    encryptedLocalStorage.remove("admin-user");
  }, [setAdminUser]);

  return { user, signIn, signUp, signOut };
}

/* Use the below hooks as needed for auth operations through the app. */
export function useUser(): string | undefined {
  const { user } = useContext(AuthContext);
  if (!user) {
    return undefined;
  } else {
    return user;
  }
}

export function useSignIn(): (input: SignInInput) => Promise<any> {
  return useContext(AuthContext).signIn;
}

export function useSignUp(): (input: SignUpInput) => Promise<any> {
  return useContext(AuthContext).signUp;
}

export function useSignOut(): () => Promise<void> {
  return useContext(AuthContext).signOut;
}
