import { forwardRef, HTMLProps, useLayoutEffect } from "react";
import { useId } from "@floating-ui/react";
import { useDialogContext } from "./DialogContext";

export const DialogHeading = forwardRef<
    HTMLHeadingElement,
    HTMLProps<HTMLHeadingElement>
>(({children, ...props}, ref) => {
    const {setLabelId} = useDialogContext()
    const id = useId()

    // Only sets `aria-labelledby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
        setLabelId(id)
        return () => setLabelId(undefined)
    }, [id, setLabelId])

    return (
        <h2 {...props} ref={ref} id={id}>
            {children}
        </h2>
    )
})