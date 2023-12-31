import { FocusEvent, forwardRef, useContext, useEffect, useRef, useState } from "react";
import {
    autoUpdate,
    flip,
    FloatingFocusManager, FloatingList, FloatingNode, FloatingPortal,
    offset, safePolygon, shift, useClick, useDismiss,
    useFloating,
    useFloatingNodeId,
    useFloatingParentNodeId,
    useFloatingTree, useHover, useInteractions,
    useListItem, useListNavigation, useMergeRefs, useRole, useTypeahead
} from "@floating-ui/react";
import styled from "styled-components";
import { MenuContext } from "./MenuContext";
import { MenuProps } from "./Menu.types";
import { Button, ButtonProps } from "../Button";

const MenuRootButton = styled(Button)`
  &[data-open] {
    background-color: ${(props) => (props.primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonBackgroundHover)};
  }
`

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

const MenuContainer = styled.div`
  background: ${props => props.theme.gle.color.menuContainerBackground};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 4px;
  border-radius: 6px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  outline: 0;
`

export const MenuTree = forwardRef<
    HTMLButtonElement,
    MenuProps & ButtonProps
>(({children, buttonContent, onOpenChange, ...props}, forwardedRef) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasFocusInside, setHasFocusInside] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const labelsRef = useRef<Array<string | null>>([]);
    const parent = useContext(MenuContext);
    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();
    const isNested = parentId != null;
    const buttonProps: ButtonProps = props as ButtonProps;

    const handleOpenChange = (open: boolean, event?: Event) => {
        setIsOpen(open)
        onOpenChange?.(open)
    }

    const {floatingStyles, refs, context} = useFloating<HTMLButtonElement>({
        nodeId,
        open: isOpen,
        onOpenChange: handleOpenChange,
        placement: isNested ? "right-start" : "bottom-start",
        middleware: [
            offset({mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0}),
            flip(),
            shift()
        ],
        whileElementsMounted: autoUpdate
    });
    const hover = useHover(context, {
        enabled: isNested,
        delay: {open: 75},
        handleClose: safePolygon({blockPointerEvents: true})
    });
    const click = useClick(context, {
        event: "mousedown",
        toggle: !isNested,
        ignoreMouse: isNested
    });
    const role = useRole(context, {role: "menu"});
    const dismiss = useDismiss(context, {bubbles: true});
    const listNavigation = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        nested: isNested,
        onNavigate: setActiveIndex
    });
    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        onMatch: isOpen ? setActiveIndex : undefined,
        activeIndex
    });
    const {
        getReferenceProps,
        getFloatingProps,
        getItemProps
    } = useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    useEffect(() => {
        if (!tree) return;

        function handleTreeClick() {
            setIsOpen(false);
        }

        function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                setIsOpen(false);
            }
        }

        tree.events.on("click", handleTreeClick);
        tree.events.on("menuopen", onSubMenuOpen);

        return () => {
            tree.events.off("click", handleTreeClick);
            tree.events.off("menuopen", onSubMenuOpen);
        };
    }, [tree, nodeId, parentId]);

    useEffect(() => {
        if (isOpen && tree) {
            tree.events.emit("menuopen", {parentId, nodeId});
        }
    }, [tree, isOpen, nodeId, parentId]);

    return (
        <FloatingNode id={nodeId}>
            {!isNested &&
                <MenuRootButton ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
                                className="gle-menu-root-button"
                                data-open={isOpen ? "" : undefined}
                                data-focus-inside={hasFocusInside ? "" : undefined}
                                {...buttonProps}
                                {...getReferenceProps(
                                    parent.getItemProps({
                                        ...props,
                                        onFocus(event: FocusEvent<HTMLButtonElement>) {
                                            props.onFocus?.(event);
                                            setHasFocusInside(false);
                                            parent.setHasFocusInside(true);
                                        }
                                    })
                                )}>
                    {buttonContent}
                </MenuRootButton>
            }
            {isNested &&
                <MenuItemButton
                    ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
                    className="gle-menu-item-button"
                    tabIndex={parent.activeIndex === item.index ? 0 : -1}
                    role="menuitem"
                    data-open={isOpen ? "" : undefined}
                    data-nested=""
                    data-focus-inside={hasFocusInside ? "" : undefined}
                    {...buttonProps}
                    {...getReferenceProps(
                        parent.getItemProps({
                            ...props,
                            onFocus(event: FocusEvent<HTMLButtonElement>) {
                                props.onFocus?.(event);
                                setHasFocusInside(false);
                                parent.setHasFocusInside(true);
                            }
                        })
                    )}
                >
                    {buttonContent}
                    <span aria-hidden style={{marginLeft: 10, fontSize: 10}}>▶</span>
                </MenuItemButton>
            }

            <MenuContext.Provider
                value={{
                    activeIndex,
                    setActiveIndex,
                    getItemProps,
                    setHasFocusInside,
                    isOpen
                }}
            >
                <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    {isOpen && (
                        <FloatingPortal>
                            <FloatingFocusManager
                                context={context}
                                modal={false}
                                initialFocus={isNested ? -1 : 0}
                                returnFocus={!isNested}
                            >
                                <MenuContainer
                                    ref={refs.setFloating}
                                    style={floatingStyles}
                                    className="gle-menu-container"
                                    {...getFloatingProps()}
                                >
                                    {children}
                                </MenuContainer>
                            </FloatingFocusManager>
                        </FloatingPortal>
                    )}
                </FloatingList>
            </MenuContext.Provider>
        </FloatingNode>
    )
})