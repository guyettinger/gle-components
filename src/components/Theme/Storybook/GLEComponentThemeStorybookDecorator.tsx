import { Decorator } from '@storybook/react'
import GLEComponentThemeProvider from "../GLEComponentThemeProvider";
import GLEComponentLightTheme from "../GLEComponentLightTheme";
import GLEComponentDarkTheme from "../GLEComponentDarkTheme";

export const withGLEComponentTheme: Decorator = (StoryFn, context) => {
    // Get values from story parameter first, else fallback to globals
    const theme = context.parameters.theme || context.globals.theme
    const storyTheme = theme === 'dark' ? GLEComponentDarkTheme : GLEComponentLightTheme
    return (
        <GLEComponentThemeProvider theme={storyTheme}>
            <StoryFn />
        </GLEComponentThemeProvider>
    )
}