import { Decorator } from '@storybook/react'
import styled, { css } from "styled-components";
import GLEComponentThemeProvider from "../GLEComponentThemeProvider";
import GLEComponentLightTheme from "../GLEComponentLightTheme";
import GLEComponentDarkTheme from "../GLEComponentDarkTheme";

export const viewports = {
    XS: 400,
    S: 640,
    M: 768,
    L: 1024,
    XL: 1440,
}
export const breakpoints = {
    XS: `(min-width: ${viewports.XS}px)`,
    S: `(min-width: ${viewports.S}px)`,
    M: `(min-width: ${viewports.M}px)`,
    L: `(min-width: ${viewports.L}px)`,
    XL: `(min-width: ${viewports.XL}px)`,
}

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
    ({left, fill, theme}) =>
        css`
          position: absolute;
          top: 0;
          left: ${left || fill ? 0 : '50vw'};
          border-right: ${left ? '1px solid #202020' : 'none'};
          right: ${left ? '50vw' : 0};
          width: ${fill ? '100vw' : '50vw'};
          height: 100vh;
          bottom: 0;
          overflow: auto;
          padding: 1rem;
          background: ${theme.gleComponent.color.screenBackground};

          ${breakpoints.S} {
            left: ${left ? 0 : '50vw'};
            right: ${left ? '50vw' : 0};
            padding: 0 !important;
          }
        `
)


export const withGLEComponentTheme: Decorator = (StoryFn, context) => {
    // Get values from story parameter first, else fallback to globals
    const theme = context.parameters.theme || context.globals.theme
    const storyTheme = theme === 'dark' ? GLEComponentDarkTheme : GLEComponentLightTheme
    return (
        <GLEComponentThemeProvider theme={storyTheme}>
            <ThemeBlock fill="true">
                <StoryFn/>
            </ThemeBlock>
        </GLEComponentThemeProvider>
    )
}