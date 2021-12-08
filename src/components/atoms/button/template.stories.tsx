import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const AtomStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const StandardButton = AtomStory.bind({});
StandardButton.args = {
  text: "I am a Standard Button, wow!",
  onClick: () => alert("Clicked!"),
};

export const ExitButton = AtomStory.bind({});
ExitButton.args = {
  variant: "exit",
  text: "I am an Exit Button, wow!",
  onClick: () => alert("Clicked!"),
};
