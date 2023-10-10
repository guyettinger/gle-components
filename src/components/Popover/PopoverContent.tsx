import { forwardRef, HTMLProps } from "react";
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from "@floating-ui/react";
import styled from "styled-components";
import { usePopoverContext } from "./PopoverContext";

const PopoverContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 10, 20, 0.1);
  border: 1px solid #ddd;
  font-size: 90%;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: calc(100vw - 10px);
`

export const PopoverContent = forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({style, ...props}, propRef) => {
    const {context: floatingContext, ...context} = usePopoverContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
        <FloatingPortal>
            <FloatingFocusManager context={floatingContext} modal={context.modal}>
                <PopoverContainer
                    ref={ref}
                    style={{...context.floatingStyles, ...style}}
                    className="gle-popover-container"
                    aria-labelledby={context.labelId}
                    aria-describedby={context.descriptionId}
                    {...context.getFloatingProps(props)}
                >
                    {props.children}
                </PopoverContainer>
            </FloatingFocusManager>
        </FloatingPortal>
    )
})