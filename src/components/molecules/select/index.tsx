import StandardSelect, { StandardSelectProps } from "./standard";

export type SelectProps = { variant: "standard" } & StandardSelectProps;

export const Select = (props: SelectProps): JSX.Element => {
  switch (props.variant) {
    case "standard":
      return <StandardSelect {...props} />;
    default:
      throw new Error(`Invalid Select variant provided: ${props.variant}`);
  }
};
