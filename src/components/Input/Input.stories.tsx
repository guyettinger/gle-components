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

export const Default: Story = ({placeholder}: InputProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <Input data-testid="Input-id" variant="small" placeholder={placeholder}/>
            </div>

            <h2>Medium</h2>
            <div>
                <Input data-testid="Input-id" variant="medium" placeholder={placeholder}/>
            </div>

            <h1>Large</h1>
            <div>
                <Input data-testid="Input-id" variant="large" placeholder={placeholder}/>
            </div>
        </div>
    )
};
Default.args = {
    placeholder: "Placeholder"
};

export const Success: Story = ({success, placeholder}: InputProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <Input data-testid="Input-id" variant="small" placeholder={placeholder} success={success}/>
            </div>

            <h2>Medium</h2>
            <div>
                <Input data-testid="Input-id" variant="medium" placeholder={placeholder} success={success}/>
            </div>

            <h1>Large</h1>
            <div>
                <Input data-testid="Input-id" variant="large" placeholder={placeholder} success={success}/>
            </div>
        </div>
    )
};
Success.args = {
    success: true,
    placeholder: "Placeholder"
};

export const Error: Story = ({error, placeholder}: InputProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <Input data-testid="Input-id" variant="small" placeholder={placeholder} error={error}/>
            </div>

            <h2>Medium</h2>
            <div>
                <Input data-testid="Input-id" variant="medium" placeholder={placeholder} error={error}/>
            </div>

            <h1>Large</h1>
            <div>
                <Input data-testid="Input-id" variant="large" placeholder={placeholder} error={error}/>
            </div>
        </div>
    )
};
Error.args = {
    error: true,
    placeholder: "Placeholder"
};

export const Disabled: Story = ({disabled, placeholder}: InputProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <Input data-testid="Input-id" variant="small" placeholder={placeholder} disabled={disabled}/>
            </div>

            <h2>Medium</h2>
            <div>
                <Input data-testid="Input-id" variant="medium" placeholder={placeholder} disabled={disabled}/>
            </div>

            <h1>Large</h1>
            <div>
                <Input data-testid="Input-id" variant="large" placeholder={placeholder} disabled={disabled}/>
            </div>
        </div>
    )
};
Disabled.args = {
    disabled: true,
    placeholder: "Placeholder"
};