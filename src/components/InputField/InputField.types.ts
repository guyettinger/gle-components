import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    label?: string
    error?: boolean
    message?: string
    success?: boolean
    disabled?: boolean
    placeholder?: string
    variant?: "small" | "medium" | "large"
    onChange?: ChangeEventHandler<HTMLInputElement>
}