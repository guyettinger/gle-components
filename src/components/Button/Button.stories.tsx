import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "gle-components/Button",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Primary.args = {
    primary: true,
    disabled: false,
    children: "Primary",
};

export const Secondary: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Secondary.args = {
    primary: false,
    disabled: false,
    children: "Secondary",
};

export const Disabled: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Disabled.args = {
    primary: false,
    disabled: true,
    children: "Disabled",
};

export const Small: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Small.args = {
    primary: true,
    disabled: false,
    size: "small",
    children: "Small",
};

export const Medium: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Medium.args = {
    primary: true,
    disabled: false,
    size: "medium",
    children: "Medium",
};

export const Large: Story = (args:ButtonProps) => (
    <Button data-testId="Button-id" {...args} />
);
Large.args = {
    primary: true,
    disabled: false,
    size: "large",
    children: "Large",
};