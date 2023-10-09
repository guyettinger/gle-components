import { ReactNode } from "react";
import { DialogProps } from "./Dialog.types";
import { DialogContext, useDialog } from "./DialogContext";

export const Dialog = (
    {
        children,
        ...options
    }: {
        children: ReactNode
    } & DialogProps) => {
    const dialog = useDialog(options)
    return (
        <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
    )
}