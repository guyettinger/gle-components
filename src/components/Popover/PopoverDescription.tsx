import { forwardRef, HTMLProps, useLayoutEffect } from "react";
import { useId } from "@floating-ui/react";
import { usePopoverContext } from "./PopoverContext";

export const PopoverDescription = forwardRef<
    HTMLParagraphElement,
    HTMLProps<HTMLParagraphElement>
>((props, ref) => {
    const {setDescriptionId} = usePopoverContext()
    const id = useId()

    // Only sets `aria-describedby` on the Popover root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
        setDescriptionId(id)
        return () => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    return <p {...props} ref={ref} id={id}/>;
})