import { GLEComponentTheme } from "./GLEComponentTheme.types";
import GLEComponentLightTheme from "./GLEComponentLightTheme";
import { baseColors, boxShadow } from "./Variables";

const GLEComponentDarkTheme: GLEComponentTheme = {
    gle: {
        ...GLEComponentLightTheme.gleComponent,
        boxShadow: {
            ...boxShadow,
            outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
        },
        color: {
            ...GLEComponentLightTheme.gle.color,
            buttonBackground: baseColors.grey.light1,
            buttonBackgroundHover: baseColors.grey.light3,
            buttonForeground: baseColors.black,
            buttonActiveBorderColor: baseColors.grey.light6,
            buttonPrimaryBackground: baseColors.blue.dark1,
            buttonPrimaryBackgroundHover: baseColors.blue.light1,
            buttonPrimaryForeground: baseColors.grey.light6,
            buttonPrimaryActiveBorderColor: baseColors.white,

            screenBackground: baseColors.grey.dark6,
        },
        name: 'dark',
    }
}

export default GLEComponentDarkTheme