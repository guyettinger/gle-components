import { GLEComponentTheme } from "./GLEComponentTheme.types";
import { GLEComponentLightTheme } from "./GLEComponentLightTheme";
import { baseColors, boxShadow } from "./Variables";

export const GLEComponentDarkTheme: GLEComponentTheme = {
    gle: {
        ...GLEComponentLightTheme.gle,
        boxShadow: {
            ...boxShadow,
            outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
        },
        color: {
            ...GLEComponentLightTheme.gle.color,
            buttonBackground: baseColors.grey.dark3,
            buttonBackgroundHover: baseColors.grey.dark1,
            buttonForeground: baseColors.white,
            buttonActiveBorderColor: baseColors.grey.light5,
            buttonPrimaryBackground: baseColors.blue.dark3,
            buttonPrimaryBackgroundHover: baseColors.blue.dark1,
            buttonPrimaryForeground: baseColors.blue.light5,
            buttonPrimaryActiveBorderColor: baseColors.white,

            menuContainerBackground: baseColors.grey.dark3,

            screenForeground: baseColors.white,
            screenBackground: baseColors.grey.dark6,
        },
        name: 'dark',
    }
}
