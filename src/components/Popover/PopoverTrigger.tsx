import { cloneElement, forwardRef, HTMLProps, isValidElement } from "react";
import { useMergeRefs } from "@floating-ui/react";
import { PopoverTriggerProps } from "./Popover.types";
import { usePopoverContext } from "./PopoverContext";

export const PopoverTrigger = forwardRef<
    HTMLElement,
    HTMLProps<HTMLElement> & PopoverTriggerProps
>(({children, asChild = false, ...props}, propRef) => {
    const context = usePopoverContext()
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
        <button
            ref={ref}
            type="button"
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </button>
    )
})
