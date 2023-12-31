import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    error?: boolean
    success?: boolean
    disabled?: boolean
    placeholder?: string
    variant?: "small" | "medium" | "large"
    onChange?: ChangeEventHandler<HTMLInputElement>
}