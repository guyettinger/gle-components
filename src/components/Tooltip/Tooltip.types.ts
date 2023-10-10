import { Placement } from "@floating-ui/react";

export interface TooltipProps {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
