import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    primary?: boolean
    disabled?: boolean
    size?: "small" | "medium" | "large"
    onClick?: MouseEventHandler<HTMLButtonElement>
}