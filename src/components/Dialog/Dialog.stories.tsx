import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { DialogProps } from "./Dialog.types";
import { DialogClose } from "./DialogClose";
import { DialogDescription } from "./DialogDescription";
import { DialogHeading } from "./DialogHeading";
import { DialogContent } from "./DialogContent";
import { DialogTrigger } from "./DialogTrigger";

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    title: "gle-components/Floating/Dialog",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;


export const Default: Story = (props: DialogProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen((v) => !v)}>
                My trigger
            </DialogTrigger>
            <DialogContent>
                <DialogHeading>My dialog heading</DialogHeading>
                <DialogDescription>My dialog description</DialogDescription>
                <DialogClose>Close</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
Default.args = {};