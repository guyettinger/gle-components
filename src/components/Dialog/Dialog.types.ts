import { ReactNode } from "react";

export interface DialogProps {
    initialOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps {
    children: ReactNode;
    asChild?: boolean;
}