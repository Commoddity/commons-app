import { Meta, Story } from "@storybook/react";
import { CurrentBillsTemplate, CurrentBillsTemplateProps } from "./template";

export default {
  title: "Page",
  component: CurrentBillsTemplate,
} as Meta;

const AtomStory: Story<CurrentBillsTemplateProps> = (args) => (
  <CurrentBillsTemplate {...args} />
);

export const Page = AtomStory.bind({});
Page.args = {
  parliament: 44,
  setParliament: () => null,
  session: 0,
  setSession: () => null,
};
