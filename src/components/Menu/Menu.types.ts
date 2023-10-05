import { ReactNode } from "react";

export interface MenuProps {
    label: string;
    nested?: boolean;
    children?: ReactNode;
}

export interface MenuItemProps {
    label: string;
    disabled?: boolean;
}