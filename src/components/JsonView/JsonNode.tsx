import { useState } from "react";
import styled, { css } from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { JsonNodeViewProps } from "./JsonView.types";
import { useJsonViewApiContext } from "./JsonViewContext";
import JsonNodeTitle from "./JsonNodeTitle";
import JsonNodeValue from "./JsonNodeValue"
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
    background: none;
    font-size: 12px;
    &[data-open],
    &:hover {
      background: #d7dce5;
    }
  }
`

const IconStyle = css`
  vertical-align: text-top;
  padding: 0 4px;
  color: cornflowerblue;
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

const JsonNode = ({title, path, value}: JsonNodeViewProps) => {
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
                        <Menu name="JsonNodeMenu"
                              onOpenChange={handleMenuOpenChange}
                              buttonContent={
                                  <span><MenuIcon/></span>
                              }>
                            <Menu name="InsertMenu"
                                  buttonContent={
                                      <span><AddIcon/>Insert</span>
                                  }>
                                <Menu name="InsertBeforeMenu"
                                      buttonContent={
                                          <span>Before</span>
                                      }>
                                    <MenuItem name="InsertBooleanBefore" onClick={handleAddClick}>
                                        <span>Boolean</span>
                                    </MenuItem>
                                    <MenuItem name="InsertNumberBefore" onClick={handleAddClick}>
                                        <span>Number</span>
                                    </MenuItem>
                                    <MenuItem name="InsertStringBefore" onClick={handleAddClick}>
                                        <span>String</span>
                                    </MenuItem>
                                    <MenuItem name="InsertArrayBefore" onClick={handleAddClick}>
                                        <span>Array</span>
                                    </MenuItem>
                                    <MenuItem name="InsertObjectBefore" onClick={handleAddClick}>
                                        <span>Object</span>
                                    </MenuItem>
                                </Menu>
                                <Menu name="InsertAfterMenu"
                                      buttonContent={
                                          <span>After</span>
                                      }>
                                    <MenuItem name="InsertBooleanAfter" onClick={handleAddClick}>
                                        <span>Boolean</span>
                                    </MenuItem>
                                    <MenuItem name="InsertNumberAfter" onClick={handleAddClick}>
                                        <span>Number</span>
                                    </MenuItem>
                                    <MenuItem name="InsertStringAfter" onClick={handleAddClick}>
                                        <span>String</span>
                                    </MenuItem>
                                    <MenuItem name="InsertArrayAfter" onClick={handleAddClick}>
                                        <span>Array</span>
                                    </MenuItem>
                                    <MenuItem name="InsertObjectAfter" onClick={handleAddClick}>
                                        <span>Object</span>
                                    </MenuItem>
                                </Menu>
                            </Menu>
                            <MenuItem name="Remove" onClick={handleRemoveClick}>
                                <span><RemoveIcon/>Remove</span>
                            </MenuItem>
                        </Menu>
                    </JsonNodeActionContainer>
                }
            </JsonNodeValueContainer>
        </JsonNodeContent>
    )
}
export default JsonNode;