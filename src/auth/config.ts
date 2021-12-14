import { ICognitoStorage } from "amazon-cognito-identity-js";
import SecureLS from "secure-ls";

// Below AuthStorage config uses the secure-ls encrypted local storage module to encrypt all
// Cognito user data so no internal ids or other identifying information are visible on the client
const encryptedLocalStorage = new SecureLS();
const AuthStorage: ICognitoStorage = {
  setItem: (key: string, value: any): void =>
    encryptedLocalStorage.set(key, value),
  getItem: (key: string): any => encryptedLocalStorage.get(key),
  removeItem: (key: string): void => encryptedLocalStorage.remove(key),
  clear: (): void => encryptedLocalStorage.removeAll(),
};

export const amplifyConfig = {
  storage: AuthStorage,
  Auth: {
    authenticationFlowType: "USER_PASSWORD_AUTH",
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_OAUTH_DOMAIN,
      scope: ["aws.cognito.signin.user.admin"],
      redirectSignIn: process.env.REACT_APP_SOCIAL_REDIRECT_URL,
      redirectSignOut: process.env.REACT_APP_SOCIAL_REDIRECT_URL,
      responseType: "code",
    },
  },
};
