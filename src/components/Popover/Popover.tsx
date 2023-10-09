import { ReactNode } from "react";
import { PopoverProps } from "./Popover.types";
import { PopoverContext, usePopover } from "./PopoverContext";

export const Popover = ({
                            children,
                            modal = false,
                            ...restOptions
                        }: {
    children: ReactNode
} & PopoverProps) => {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({modal, ...restOptions})
    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    )
}