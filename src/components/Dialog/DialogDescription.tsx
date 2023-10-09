import { forwardRef, HTMLProps, useLayoutEffect } from "react";
import { useId } from "@floating-ui/react";
import { useDialogContext } from "./DialogContext";

export const DialogDescription = forwardRef<
    HTMLParagraphElement,
    HTMLProps<HTMLParagraphElement>
>(({children, ...props}, ref) => {
    const {setDescriptionId} = useDialogContext()
    const id = useId()

    // Only sets `aria-describedby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
        setDescriptionId(id)
        return () => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    return (
        <p {...props} ref={ref} id={id}>
            {children}
        </p>
    )
})