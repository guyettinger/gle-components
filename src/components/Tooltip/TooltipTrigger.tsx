import { cloneElement, forwardRef, HTMLProps, isValidElement } from "react";
import { useMergeRefs } from "@floating-ui/react";
import { useTooltipContext } from "./TooltipContext";
import { Button, ButtonProps } from "../Button";

export const TooltipTrigger = forwardRef<
    HTMLElement,
    HTMLProps<HTMLElement> & ButtonProps & { asChild?: boolean }
>(({children, asChild = false, ...props}, propRef) => {
    const context = useTooltipContext()
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                "data-state": context.open ? "open" : "closed"
            })
        )
    }

    return (
        <Button
            ref={ref}
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </Button>
    )
})