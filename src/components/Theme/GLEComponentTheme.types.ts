import { ReactNode } from "react";

export interface GLEComponentTheme {
    main: string,
    secondary: string,
    color: {
        screenBackground: string
    }
}

export interface GLEComponentThemeProviderProps {
    theme: GLEComponentTheme
    children: ReactNode
}