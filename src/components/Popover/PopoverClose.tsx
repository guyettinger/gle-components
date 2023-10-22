import { forwardRef } from "react";
import { usePopoverContext } from "./PopoverContext";
import { Button, ButtonProps } from "../Button";

export const PopoverClose = forwardRef<
    HTMLButtonElement,
    ButtonProps
>((props, ref) => {
    const {setOpen} = usePopoverContext()
    return (
        <Button
            type="button"
            ref={ref}
            {...props}
            onClick={(event) => {
                props.onClick?.(event)
                setOpen(false)
            }}
        />
    )
})
