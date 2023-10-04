import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean
    disabled?: boolean
    size?: "small" | "medium" | "large"
    onClick?: MouseEventHandler<HTMLButtonElement>
}