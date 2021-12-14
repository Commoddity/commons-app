export type CognitoUser = {
  username: string;
  challengeName?: "NEW_PASSWORD_REQUIRED";
};

export type SignInInput = {
  emailAddress: string;
  password: string;
};
