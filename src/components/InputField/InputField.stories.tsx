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

export const Default: Story = ({label, placeholder}: InputFieldProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <InputField data-testid="InputField-id" variant="small" label={label} placeholder={placeholder}/>
            </div>

            <h2>Medium</h2>
            <div>
                <InputField data-testid="InputField-id" variant="medium" label={label} placeholder={placeholder}/>
            </div>

            <h1>Large</h1>
            <div>
                <InputField data-testid="InputField-id" variant="large" label={label} placeholder={placeholder}/>
            </div>
        </div>
    )
};
Default.args = {
    label: "Default",
    placeholder: "Placeholder"
};

export const Success: Story = ({label, placeholder, success}: InputFieldProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <InputField data-testid="InputField-id" variant="small" label={label} placeholder={placeholder} success={success}/>
            </div>

            <h2>Medium</h2>
            <div>
                <InputField data-testid="InputField-id" variant="medium" label={label} placeholder={placeholder} success={success}/>
            </div>

            <h1>Large</h1>
            <div>
                <InputField data-testid="InputField-id" variant="large" label={label} placeholder={placeholder} success={success}/>
            </div>
        </div>
    )
};
Success.args = {
    success: true,
    label: "Success",
    placeholder: "Placeholder"
};

export const Error: Story = ({label, placeholder, error}: InputFieldProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <InputField data-testid="InputField-id" variant="small" label={label} placeholder={placeholder} error={error}/>
            </div>

            <h2>Medium</h2>
            <div>
                <InputField data-testid="InputField-id" variant="medium" label={label} placeholder={placeholder} error={error}/>
            </div>

            <h1>Large</h1>
            <div>
                <InputField data-testid="InputField-id" variant="large" label={label} placeholder={placeholder} error={error}/>
            </div>
        </div>
    )
};
Error.args = {
    error: true,
    message: "Error",
    placeholder: "Placeholder"
};

export const Disabled: Story = ({label, placeholder, disabled}: InputFieldProps) => {
    return (
        <div>
            <h3>Small</h3>
            <div>
                <InputField data-testid="InputField-id" variant="small" label={label} placeholder={placeholder} disabled={disabled}/>
            </div>

            <h2>Medium</h2>
            <div>
                <InputField data-testid="InputField-id" variant="medium" label={label} placeholder={placeholder} disabled={disabled}/>
            </div>

            <h1>Large</h1>
            <div>
                <InputField data-testid="InputField-id" variant="large" label={label} placeholder={placeholder} disabled={disabled}/>
            </div>
        </div>
    )
};
Disabled.args = {
    disabled: true,
    label: "Disabled",
    placeholder: "Placeholder"
};