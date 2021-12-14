import emojiRegex from "emoji-regex";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

const hasEmojis = (name: string): boolean => {
  const regex = emojiRegex();
  return !!name.match(regex);
};

export class UserUtils {
  static isValidUsername(username: string): boolean {
    const trimmedUsername = username.trim();
    return isEmail(trimmedUsername) && !hasEmojis(trimmedUsername);
  }

  static isValidPassword(password: string): boolean {
    return isStrongPassword(password.trim(), {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    });
  }
}
