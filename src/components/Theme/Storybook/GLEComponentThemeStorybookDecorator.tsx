import { Decorator } from '@storybook/react'
import styled, { css } from "styled-components";
import GLEComponentThemeProvider from "../GLEComponentThemeProvider";
import GLEComponentLightTheme from "../GLEComponentLightTheme";
import GLEComponentDarkTheme from "../GLEComponentDarkTheme";
import { breakpoints } from "../Variables";

const ThemeBlock = styled.div<{ left?: boolean; $fill?: boolean }>(
    ({left = false, $fill = false, theme}) =>
        css`
          position: absolute;
          top: 0;
          left: ${left || $fill ? 0 : '50vw'};
          border-right: ${left ? '1px solid #202020' : 'none'};
          right: ${left ? '50vw' : 0};
          width: ${$fill ? '100vw' : '50vw'};
          height: 100vh;
          bottom: 0;
          overflow: auto;
          padding: 1rem;
          color: ${theme.gle.color.screenForeground};
          background: ${theme.gle.color.screenBackground};
          font-family: ${theme.gle.fonts.family};

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
            <ThemeBlock $fill={true} className="gle-theme-block">
                <StoryFn/>
            </ThemeBlock>
        </GLEComponentThemeProvider>
    )
}