import { forwardRef } from "react";
import { useDialogContext } from "./DialogContext";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";

export const DialogClose = forwardRef<
    HTMLButtonElement,
    ButtonProps
>((props:ButtonProps, ref) => {
    const {setOpen} = useDialogContext()
    return (
        <Button {...props} ref={ref} onClick={() => setOpen(false)}/>
    )
})
