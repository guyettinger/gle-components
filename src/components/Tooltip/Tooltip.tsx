import { ReactNode } from "react";
import { TooltipProps } from "./Tooltip.types";
import { TooltipContext, useTooltip } from "./TooltipContext";


export const Tooltip = ({
                            children,
                            ...options
                        }: { children: ReactNode } & TooltipProps) => {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const tooltip = useTooltip(options)
    return (
        <TooltipContext.Provider value={tooltip}>
            {children}
        </TooltipContext.Provider>
    )
}