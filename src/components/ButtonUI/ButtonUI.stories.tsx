import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonUI from "./ButtonUI";
import { ButtonUIDocumentationComponent } from "./ButtonUIDocumentation";


export default {
  title: "Examples/ButtonUI",
  component: ButtonUI,
  parameters: {
    docs: {
      page: ButtonUIDocumentationComponent,
    },
  },
} as ComponentMeta<any>;

const Template: ComponentStory<typeof ButtonUI> = (args) => <ButtonUI {...args} />;

export const HelloWorld: any = Template.bind({});
HelloWorld.args = {
  label: "Hello world!",
  size: "small",
  variant: "contained",
  color: "warning"
};

export const Like: any = Template.bind({});
Like.args = {
  label: "Like!",
  size: "large",
  variant: "outlined",
  color: "secondary"
};
