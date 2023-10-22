import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import { InputFieldProps } from "./InputField.types";

const meta: Meta<typeof InputField> = {
    component: InputField,
    title: "gle-components/InputField",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputField>;

const StoryTemplate = (args: InputFieldProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <InputField data-testid="InputField-id" variant="small" {...args}/>
            </div>

            <h2>Medium</h2>
            <div>
                <InputField data-testid="InputField-id" variant="medium" {...args}/>
            </div>

            <h1>Large</h1>
            <div>
                <InputField data-testid="InputField-id" variant="large" {...args}/>
            </div>
        </div>
    )
};


export const Default: Story = (args: InputFieldProps) => (
    <StoryTemplate {...args}/>
);
Default.args = {
    error: false,
    disabled: false,
    label: "Default",
    placeholder: "Placeholder"
};

export const Success: Story = (args: InputFieldProps) => (
    <StoryTemplate {...args}/>
);
Success.args = {
    error: false,
    success: true,
    disabled: false,
    label: "Success",
    placeholder: "Placeholder"
};

export const Error: Story = (args: InputFieldProps) => (
    <StoryTemplate {...args}/>
);
Error.args = {
    error: true,
    disabled: false,
    message: "Error",
    placeholder: "Placeholder"
};

export const Disabled: Story = (args: InputFieldProps) => (
    <StoryTemplate {...args}/>
);
Disabled.args = {
    disabled: true,
    label: "Disabled",
    placeholder: "Placeholder"
};