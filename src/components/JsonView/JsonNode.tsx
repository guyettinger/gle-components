import { useState } from "react";
import styled, { css } from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { JsonNodeViewProps } from "./JsonView.types";
import { useJsonViewApiContext } from "./JsonViewContext";
import { JsonNodeTitle } from "./JsonNodeTitle";
import { JsonNodeValue } from "./JsonNodeValue"
import { Menu, MenuItem } from "../Menu";

const JsonNodeContent = styled.li`
`

const JsonNodeTitleContainer = styled.span`
  padding-right: 4px;
`

const JsonNodeValueContainer = styled.span`
`

const JsonNodeActionContainer = styled.span`
  position: absolute;
  vertical-align: middle;
  padding-left: 4px;

  .gle-menu-root-button {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
`

const IconStyle = css`
  vertical-align: text-top;
  padding: 0 4px;
  color: inherit;
`

const MenuIcon = styled(MdMoreHoriz)`
  ${IconStyle}
`

const RemoveIcon = styled(MdRemoveCircleOutline)`
  ${IconStyle}
`

const AddIcon = styled(MdAddCircleOutline)`
  ${IconStyle}
`

export const JsonNode = ({title, path, value}: JsonNodeViewProps) => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const api = useJsonViewApiContext()
    const isRoot = !path

    const handleMouseEnter = () => {
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false)
    }

    const handleMenuOpenChange = (open: boolean) => {
        setIsMenuOpen(open)
    }

    const handleRemoveClick = (e: any) => {
        e.stopPropagation()
        api.remove(path)
    }

    const handleAddClick = (e: any) => {
        e.stopPropagation()
    }

    const menuVariant = "small";

    return (
        <JsonNodeContent className="gle-node-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {title &&
                <JsonNodeTitleContainer className="gle-node-title-container">
                    <JsonNodeTitle title={title} path={path}/>
                </JsonNodeTitleContainer>
            }
            <JsonNodeValueContainer className="gle-node-value-container">
                <JsonNodeValue value={value} path={path}/>
                {(!isRoot && (isMouseOver || isMenuOpen)) &&
                    <JsonNodeActionContainer className="gle-node-action-container">
                        <Menu variant={menuVariant} name="JsonNodeMenu"
                              onOpenChange={handleMenuOpenChange}
                              buttonContent={
                                  <span><MenuIcon/></span>
                              }>
                            <Menu name="InsertMenu"
                                  variant={menuVariant}
                                  buttonContent={
                                      <span><AddIcon/>Insert</span>
                                  }>
                                <Menu name="InsertBeforeMenu"
                                      variant={menuVariant}
                                      buttonContent={
                                          <span>Before</span>
                                      }>
                                    <MenuItem name="InsertBooleanBefore"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Boolean</span>
                                    </MenuItem>
                                    <MenuItem name="InsertNumberBefore"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Number</span>
                                    </MenuItem>
                                    <MenuItem name="InsertStringBefore"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>String</span>
                                    </MenuItem>
                                    <MenuItem name="InsertArrayBefore"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Array</span>
                                    </MenuItem>
                                    <MenuItem name="InsertObjectBefore"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Object</span>
                                    </MenuItem>
                                </Menu>
                                <Menu name="InsertAfterMenu"
                                      variant={menuVariant}
                                      buttonContent={
                                          <span>After</span>
                                      }>
                                    <MenuItem name="InsertBooleanAfter"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Boolean</span>
                                    </MenuItem>
                                    <MenuItem name="InsertNumberAfter"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Number</span>
                                    </MenuItem>
                                    <MenuItem name="InsertStringAfter"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>String</span>
                                    </MenuItem>
                                    <MenuItem name="InsertArrayAfter"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Array</span>
                                    </MenuItem>
                                    <MenuItem name="InsertObjectAfter"
                                              variant={menuVariant}
                                              onClick={handleAddClick}>
                                        <span>Object</span>
                                    </MenuItem>
                                </Menu>
                            </Menu>
                            <MenuItem name="Remove"
                                      variant={menuVariant}
                                      onClick={handleRemoveClick}>
                                <span><RemoveIcon/>Remove</span>
                            </MenuItem>
                        </Menu>
                    </JsonNodeActionContainer>
                }
            </JsonNodeValueContainer>
        </JsonNodeContent>
    )
}