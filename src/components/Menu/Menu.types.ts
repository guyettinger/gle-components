import { ReactNode } from "react";

export interface MenuProps {
    name: string;
    buttonContent: ReactNode;
    nested?: boolean;
    children?: ReactNode;
}

export interface MenuItemProps {
    name: string;
    disabled?: boolean;
    children: ReactNode;
}