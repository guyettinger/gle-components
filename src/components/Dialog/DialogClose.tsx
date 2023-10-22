import { forwardRef } from "react";
import { useDialogContext } from "./DialogContext";
import { Button, ButtonProps } from "../Button";

export const DialogClose = forwardRef<
    HTMLButtonElement,
    ButtonProps
>((props: ButtonProps, ref) => {
    const {setOpen} = useDialogContext()
    return (
        <Button {...props} ref={ref} onClick={() => setOpen(false)}/>
    )
})
