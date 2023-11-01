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

export const Default: Story = ({children}: ButtonProps) => {
    return (
        <div>
            <div>
                <h3>Small</h3>
                <p>
                    <Button data-testid="Button-id" variant="small">
                        {children}
                    </Button>
                </p>
                <h3>Small - disabled</h3>
                <p>
                    <Button data-testid="Button-id" variant="small"
                            disabled={true}>{children}
                    </Button>
                </p>
            </div>
            <div>
                <h2>Medium</h2>
                <p>
                    <Button data-testid="Button-id" variant="medium">
                        {children}
                    </Button>
                </p>
                <h2>Medium - disabled</h2>
                <p>
                    <Button data-testid="Button-id" variant="medium" disabled={true}>
                        {children}
                    </Button>
                </p>
            </div>
            <div>
                <h1>Large</h1>
                <p>
                    <Button data-testid="Button-id" variant="large">
                        {children}
                    </Button>
                </p>
                <h1>Large - disabled</h1>
                <p>
                    <Button data-testid="Button-id" variant="large" disabled={true}>
                        {children}
                    </Button>
                </p>
            </div>
        </div>
    )
};
Default.args = {
    primary: false,
    children: "Default",
};

export const Primary: Story = ({primary, children}: ButtonProps) => {
    return (
        <div>
            <div>
                <h3>Small</h3>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="small">
                        {children}
                    </Button>
                </p>
                <h3>Small - disabled</h3>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="small" disabled={true}>
                        {children}
                    </Button>
                </p>
            </div>
            <div>
                <h2>Medium</h2>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="medium">
                        {children}
                    </Button>
                </p>
                <h2>Medium - disabled</h2>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="medium" disabled={true}>
                        {children}
                    </Button>
                </p>
            </div>
            <div>
                <h1>Large</h1>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="large">
                        {children}
                    </Button>
                </p>
                <h1>Large - disabled</h1>
                <p>
                    <Button data-testid="Button-id" primary={primary} variant="large" disabled={true}>
                        {children}
                    </Button>
                </p>
            </div>
        </div>
    )
};
Primary.args = {
    primary: true,
    children: "Primary",
};