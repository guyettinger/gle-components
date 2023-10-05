import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { MenuProps } from "./Menu.types";

const meta: Meta<typeof Menu> = {
    component: Menu,
    title: "gle-components/Menu",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = (args: MenuProps) => (
    <Menu data-testid="Menu-id" {...args} >
        <MenuItem label="Undo" onClick={() => console.log("Undo")}/>
        <MenuItem label="Redo" disabled/>
        <MenuItem label="Cut"/>
        <Menu label="Copy as">
            <MenuItem label="Text"/>
            <MenuItem label="Video"/>
            <Menu label="Image">
                <MenuItem label=".png"/>
                <MenuItem label=".jpg"/>
                <MenuItem label=".svg"/>
                <MenuItem label=".gif"/>
            </Menu>
            <MenuItem label="Audio"/>
        </Menu>
        <Menu label="Share">
            <MenuItem label="Mail"/>
            <MenuItem label="Instagram"/>
        </Menu>
    </Menu>
);
Primary.args = {
    label: "Primary"
};