import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "gle-components/Button",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

const StoryTemplate = (args: ButtonProps) => {
    return (
        <div>
            <div>
                <h3>Small</h3>
                <p>
                    <Button data-testid="Button-id" {...args} variant="small"/>
                </p>
                <h3>Small - disabled</h3>
                <p>
                    <Button data-testid="Button-id" {...args} variant="small" disabled={true}/>
                </p>
            </div>
            <div>
                <h2>Medium</h2>
                <p>
                    <Button data-testid="Button-id" {...args} variant="medium"/>
                </p>
                <h2>Medium - disabled</h2>
                <p>
                    <Button data-testid="Button-id" {...args} variant="medium" disabled={true}/>
                </p>
            </div>
            <div>
                <h1>Large</h1>
                <p>
                    <Button data-testid="Button-id" {...args} variant="large"/>
                </p>
                <h1>Large - disabled</h1>
                <p>
                    <Button data-testid="Button-id" {...args} variant="large" disabled={true}/>
                </p>
            </div>
        </div>
    )
};

export const Default: Story = (args: ButtonProps) => (
    <StoryTemplate {...args}/>
);
Default.args = {
    primary: false,
    children: "Default",
};

export const Primary: Story = (args: ButtonProps) => (
    <StoryTemplate {...args}/>
);
Primary.args = {
    primary: true,
    children: "Primary",
};