import { ThemeProvider } from 'styled-components';
import { GLEComponentThemeProviderProps } from "./GLEComponentTheme.types";
import { GLEComponentDefaultTheme } from "./GLEComponentDefaultTheme";

export const GLEComponentThemeProvider = ({theme, children}: GLEComponentThemeProviderProps) => {
    const gleComponentTheme = Object.assign({}, GLEComponentDefaultTheme, theme)
    return (
        <ThemeProvider theme={gleComponentTheme}>
            {children}
        </ThemeProvider>
    )
}