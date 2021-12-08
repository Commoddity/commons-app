import { Meta, Story } from "@storybook/react";
import { Select, SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
} as Meta;

const AtomStory: Story<SelectProps> = (args) => <Select {...args} />;

export const ParliamentSelect = AtomStory.bind({});
ParliamentSelect.args = {
  options: [44, 43],
  value: 44,
  label: "Parliament",
  onChange: () => alert(" Parliamentchanged!"),
  variant: "standard",
};

export const SessionSelect = AtomStory.bind({});
SessionSelect.args = {
  options: [1, 2],
  value: 1,
  label: "Session",
  onChange: () => alert("Session changed!"),
  variant: "standard",
};
