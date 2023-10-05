import { ReactNode } from "react";

export interface GLEComponentTheme {
    main: string,
    secondary: string
}

export interface GLEComponentThemeProviderProps {
    theme: GLEComponentTheme
    children: ReactNode
}