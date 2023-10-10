import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tooltip } from "./Tooltip";
import { TooltipContent } from "./TooltipContent";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipProps } from "./Tooltip.types";

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    title: "gle-components/Tooltip",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const ControlledTooltip: Story = (props: TooltipProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Tooltip open={open} onOpenChange={setOpen}>
            <TooltipTrigger onClick={() => setOpen((v) => !v)}>
                My trigger
            </TooltipTrigger>
            <TooltipContent className="Tooltip">My tooltip</TooltipContent>
        </Tooltip>
    );
}
ControlledTooltip.args = {};

export const UncontrolledTooltip: Story = (props: TooltipProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>My trigger</TooltipTrigger>
            <TooltipContent className="Tooltip">My tooltip</TooltipContent>
        </Tooltip>
    );
}
UncontrolledTooltip.args = {};