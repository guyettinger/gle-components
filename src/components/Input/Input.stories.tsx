import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { InputProps } from "./Input.types";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "gle-components/Input",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

const StoryTemplate = (args: InputProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <Input data-testid="Input-id" variant="small" {...args}/>
            </div>

            <h2>Medium</h2>
            <div>
                <Input data-testid="Input-id" variant="medium" {...args}/>
            </div>

            <h1>Large</h1>
            <div>
                <Input data-testid="Input-id" variant="large" {...args}/>
            </div>
        </div>
    )
};

export const Default: Story = (args: InputProps) => (
    <StoryTemplate {...args}/>
);
Default.args = {
    error: false,
    disabled: false,
    placeholder: "Placeholder"
};

export const Success: Story = (args: InputProps) => (
    <StoryTemplate {...args}/>
);
Success.args = {
    error: false,
    success: true,
    disabled: false,
    placeholder: "Placeholder"
};

export const Error: Story = (args: InputProps) => (
    <StoryTemplate {...args}/>
);
Error.args = {
    error: true,
    disabled: false,
    placeholder: "Placeholder"
};

export const Disabled: Story = (args: InputProps) => (
    <StoryTemplate {...args}/>
);
Disabled.args = {
    disabled: true,
    placeholder: "Placeholder"
};