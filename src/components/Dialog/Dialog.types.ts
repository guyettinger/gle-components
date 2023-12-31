import { ReactNode } from "react";
import { ButtonProps } from "../Button";

export interface DialogProps {
    initialOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}