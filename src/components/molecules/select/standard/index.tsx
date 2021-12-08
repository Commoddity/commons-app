import { StandardSelectTemplate, StandardSelectTemplateProps } from "./template";

export type StandardSelectProps = StandardSelectTemplateProps;

export default (props: StandardSelectProps): JSX.Element => {
  return <StandardSelectTemplate {...props} />;
};
