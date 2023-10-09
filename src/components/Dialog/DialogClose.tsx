import { ButtonHTMLAttributes, forwardRef } from "react";
import { useDialogContext } from "./DialogContext";

export const DialogClose = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
    const {setOpen} = useDialogContext()
    return (
        <button type="button" {...props} ref={ref} onClick={() => setOpen(false)}/>
    )
})
