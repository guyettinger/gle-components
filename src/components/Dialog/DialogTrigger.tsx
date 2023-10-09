import { cloneElement, forwardRef, HTMLProps, isValidElement } from "react";
import { useMergeRefs } from "@floating-ui/react";
import { DialogTriggerProps } from "./Dialog.types";
import { useDialogContext } from "./DialogContext";

export const DialogTrigger = forwardRef<
    HTMLElement,
    HTMLProps<HTMLElement> & DialogTriggerProps
>(({children, asChild = false, ...props}, propRef) => {
    const context = useDialogContext()
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
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </button>
    )
})