import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { ButtonHTMLAttributes, forwardRef, MouseEvent, FocusEvent, useContext } from "react";
import styled from "styled-components";
import MenuContext from "./MenuContext";
import { MenuItemProps } from "./Menu.types";

const MenuItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;
  line-height: 1.8;
  min-width: 110px;
  margin: 0;
  outline: 0;
  
  &:focus {
    background: royalblue;
    color: white;
  }
  
  &[data-nested][data-open]:not([data-focus-inside]) {
    background: royalblue;
    color: white;
  }
  
  &[data-focus-inside][data-open] {
    background: #d7dce5;
  }
`
export const MenuItem = forwardRef<
    HTMLButtonElement,
    MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({name, children, disabled, ...props}, forwardedRef) => {
    const menu = useContext(MenuContext);
    const item = useListItem({label: disabled ? null : name});
    const tree = useFloatingTree();
    const isActive = item.index === menu.activeIndex;

    return (
        <MenuItemButton
            {...props}
            ref={useMergeRefs([item.ref, forwardedRef])}
            type="button"
            role="menuitem"
            className="MenuItem"
            tabIndex={isActive ? 0 : -1}
            disabled={disabled}
            {...menu.getItemProps({
                onClick(event: MouseEvent<HTMLButtonElement>) {
                    props.onClick?.(event);
                    tree?.events.emit("click");
                },
                onFocus(event: FocusEvent<HTMLButtonElement>) {
                    props.onFocus?.(event);
                    menu.setHasFocusInside(true);
                }
            })}
        >
            {children}
        </MenuItemButton>
    );
});