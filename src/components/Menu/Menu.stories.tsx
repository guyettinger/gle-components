import { Meta, StoryObj } from "@storybook/react";
import { MdMenu } from "react-icons/md";
import { MdUndo } from "react-icons/md";
import { MdRedo } from "react-icons/md";
import { MdContentCut } from "react-icons/md";
import { MdCopyAll } from "react-icons/md";
import { MdShare } from "react-icons/md";
import styled, { css } from "styled-components";
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

const IconStyle = css`
  vertical-align: text-top;
  padding-right: 4px;
  color: cornflowerblue;
`

const MenuIcon = styled(MdMenu)`
    ${IconStyle}
`

const UndoIcon = styled(MdUndo)`
  ${IconStyle}
`

const RedoIcon = styled(MdRedo)`
  ${IconStyle}
`

const CutIcon = styled(MdContentCut)`
  ${IconStyle}
`

const CopyIcon = styled(MdCopyAll)`
  ${IconStyle}
`

const ShareIcon = styled(MdShare)`
  ${IconStyle}
`

export const Default: Story = (args: MenuProps) => (
    <Menu data-testid="Menu-id" {...args} buttonContent={<span><MenuIcon/>MENU</span>}>
        <MenuItem name="Undo" onClick={() => console.log("Undo")}><span><UndoIcon/>Undo</span></MenuItem>
        <MenuItem name="Redo" disabled><span><RedoIcon/>Redo</span></MenuItem>
        <MenuItem name="Cut"><span><CutIcon/>Cut</span></MenuItem>
        <Menu name="Copy as" buttonContent={<span><CopyIcon/>Copy As</span>}>
            <MenuItem name="Text"><span>Text</span></MenuItem>
            <MenuItem name="Video"><span>Video</span></MenuItem>
            <Menu name="Image" buttonContent={<span>Image</span>}>
                <MenuItem name=".png"><span>.png</span></MenuItem>
                <MenuItem name=".jpg"><span>.jpg</span></MenuItem>
                <MenuItem name=".svg"><span>.svg</span></MenuItem>
                <MenuItem name=".gif"><span>.gif</span></MenuItem>
            </Menu>
            <MenuItem name="Audio"><span>Audio</span></MenuItem>
        </Menu>
        <Menu name="Share" buttonContent={<span><ShareIcon/>Share</span>}>
            <MenuItem name="Mail"><span>Mail</span></MenuItem>
            <MenuItem name="Instagram"><span>Instagram</span></MenuItem>
        </Menu>
    </Menu>
);
Default.args = {
    label: "Primary"
};