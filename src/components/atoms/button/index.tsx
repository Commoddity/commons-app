import StandardButton, { StandardButtonProps } from "./standard";
import ExitButton, { ExitButtonProps } from "./exit";

export type ButtonProps =
  | ({ variant: "standard" } & StandardButtonProps)
  | ({ variant: "exit" } & ExitButtonProps);

export const Button = (props: ButtonProps): JSX.Element => {
  switch (props.variant) {
    case "exit":
      return <ExitButton {...props} />;
    default:
      return <StandardButton {...props} />;
  }
};
