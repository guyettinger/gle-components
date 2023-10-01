import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string
    label?: string
    error?: boolean
    message?: string
    success?: boolean
    disabled?: boolean
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}