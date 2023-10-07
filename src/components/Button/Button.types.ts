import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean
    disabled?: boolean
    variant?: "small" | "medium" | "large"
    onClick?: MouseEventHandler<HTMLButtonElement>
}