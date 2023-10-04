import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "gle-components/Input",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args:any) => (
    <Input data-testId="Input-id" {...args} />
);
Primary.args = {
    error: false,
    disabled: false,
    placeholder: "Primary",
};

export const Success: Story = (args:any) => (
    <Input data-testId="Input-id" {...args} />
);
Success.args = {
    error: false,
    success: true,
    disabled: false,
    placeholder: "Success",
};

export const Error: Story = (args:any) => (
    <Input data-testId="Input-id" {...args} />
);
Error.args = {
    error: true,
    disabled: false,
    placeholder: "Error",
};

export const Disabled: Story = (args:any) => (
    <Input data-testId="Input-id" {...args} />
);
Disabled.args = {
    disabled: true,
    placeholder: "Disabled",
};