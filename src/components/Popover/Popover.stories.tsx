import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { PopoverProps } from "./Popover.types";
import { PopoverClose } from "./PopoverClose";
import { PopoverDescription } from "./PopoverDescription";
import { PopoverHeading } from "./PopoverHeading";
import { PopoverContent } from "./PopoverContent";
import { PopoverTrigger } from "./PopoverTrigger";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
    component: Popover,
    title: "gle-components/Popover",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Popover>;


export const Default: Story = (props: PopoverProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger onClick={() => setOpen((v) => !v)}>
                My trigger
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeading>My popover heading</PopoverHeading>
                <PopoverDescription>My popover description</PopoverDescription>
                <PopoverClose>Close</PopoverClose>
            </PopoverContent>
        </Popover>
    );
}
Default.args = {};