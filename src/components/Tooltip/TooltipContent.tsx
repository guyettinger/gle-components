import { forwardRef, HTMLProps } from "react";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import styled from "styled-components";
import { useTooltipContext } from "./TooltipContext";

const TooltipContainer = styled.div`
  background-color: #444;
  color: white;
  font-size: 90%;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: border-box;
  width: max-content;
  max-width: calc(100vw - 10px);
`

export const TooltipContent = forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({style, ...props}, propRef) => {
    const context = useTooltipContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!context.open) return null;

    return (
        <FloatingPortal>
            <TooltipContainer
                ref={ref}
                style={{
                    ...context.floatingStyles,
                    ...style
                }}
                className="gle-tooltip-container"
                {...context.getFloatingProps(props)}
            />
        </FloatingPortal>
    )
})