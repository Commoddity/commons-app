import { StandardButtonTemplate, StandardButtonTemplateProps } from "./template";

export type StandardButtonProps = StandardButtonTemplateProps;

export default (props: StandardButtonProps): JSX.Element => {
  return <StandardButtonTemplate {...props} />;
};
