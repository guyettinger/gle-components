import { forwardRef, MouseEvent, FocusEvent, useContext } from "react";
import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import styled from "styled-components";
import MenuContext from "./MenuContext";
import { MenuItemProps } from "./Menu.types";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";

const MenuItemButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;
  min-width: 110px;
  margin: 2px 0;
  outline: 0;

  color: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryForeground : props.theme.gle.color.buttonForeground)};
  background: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryBackground : props.theme.gle.color.buttonBackground)};
  
  &:focus {
    background: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonBackgroundHover)};
  }
  
  &[data-nested][data-open]:not([data-focus-inside]) {
    background: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonBackgroundHover)};
  }
  
  &[data-focus-inside][data-open] {
    background: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonBackgroundHover)};
  }
`
export const MenuItem = forwardRef<
    HTMLButtonElement,
    MenuItemProps & ButtonProps
>(({name, children, disabled, ...props}, forwardedRef) => {
    const menu = useContext(MenuContext);
    const item = useListItem({label: disabled ? null : name});
    const tree = useFloatingTree();
    const isActive = item.index === menu.activeIndex;

    return (
        <MenuItemButton
            {...props}
            ref={useMergeRefs([item.ref, forwardedRef])}
            role="menuitem"
            className="gle-menu-item-button"
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