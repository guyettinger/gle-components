import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
    component: InputField,
    title: "gle-components/InputField",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Primary: Story = (args:any) => (
    <InputField data-testId="InputField-id" {...args} />
);
Primary.args = {
    error: false,
    disabled: false,
    label: "Primary",
};

export const Success: Story = (args:any) => (
    <InputField data-testId="InputField-id" {...args} />
);
Success.args = {
    error: false,
    success: true,
    disabled: false,
    label: "Success",
};

export const Error: Story = (args:any) => (
    <InputField data-testId="InputField-id" {...args} />
);
Error.args = {
    error: true,
    disabled: false,
    message: "Error",
};

export const Disabled: Story = (args:any) => (
    <InputField data-testId="InputField-id" {...args} />
);
Disabled.args = {
    disabled: true,
    label: "Disabled",
};