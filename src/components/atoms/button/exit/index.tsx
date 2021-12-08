import { ExitButtonTemplate, ExitButtonTemplateProps } from "./template";

export type ExitButtonProps = ExitButtonTemplateProps;

export default (props: ExitButtonProps): JSX.Element => {
  return <ExitButtonTemplate {...props} />;
};
