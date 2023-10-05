import { ThemeProvider } from 'styled-components';
import { GLEComponentThemeProviderProps } from "./GLEComponentTheme.types";
import GLEComponentDefaultTheme from "./GLEComponentDefaultTheme";

const GLEComponentThemeProvider = ({theme, children}: GLEComponentThemeProviderProps) => {
    const gleComponentTheme = {
        gleComponent: Object.assign({}, GLEComponentDefaultTheme, theme),
    };
    return (
        <ThemeProvider theme={gleComponentTheme}>
            {children}
        </ThemeProvider>
    );
}

export default GLEComponentThemeProvider